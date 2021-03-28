const Sequelize = require('sequelize');
const Usuario = require('../models').usuarios;

module.exports = {

    async register(req, res) {
        try {
            const [usuario, created] = await Usuario.findOrCreate({
                where: { nombre_usuario: req.body.nombre_usuario },
                defaults: {
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    nombre_usuario: req.body.nombre_usuario,
                    password: req.body.password
                }
            });
            if (created) {
                res.status(200).json({
                    status: "Succeeded",
                    message: "Usuario creado con éxito",
                    data: usuario.id
                });
            } else {
                res.status(409).json({
                    status: "Failed",
                    message: "El nombre de usuario ya existe",
                    data: null
                });
            }
        } catch (err) {
            res.status(400).json({
                status: "failed",
                message: err,
                data: null
            });
        }
    },
    async login(req, res) {
        try {
            const usuario = await Usuario.findOne({
                where: {
                    nombre_usuario: req.body.nombre_usuario,
                    password: req.body.password
                }
            });
            if (usuario === null) {
                res.status(404).json({
                    status: "Failed",
                    message: "Usuario o contraseña incorrectos",
                    data: null
                })
            }
            res.status(200).json({
                status: "Succeeded",
                message: "Logueado correctamente",
                data: usuario.id
            });
        } catch (err) {
            res.status(400).json({
                status: "failed",
                message: err.message,
                data: null
            });
        }
    }
}