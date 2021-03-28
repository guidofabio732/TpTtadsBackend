const Sequelize = require('sequelize');
const Usuario = require('../models').usuarios;

const serviceResponse = require('../models/serviceResponse'); // funcion que devuelve un objeto con los datos para responder

module.exports = {

    async register(req, res) {
        let response;
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
                res.status(200);
                response = serviceResponse('Succeeded', 'Usuario creado con exito', usuario.id);

            } else {
                res.status(409);
                response = serviceResponse('Failed', 'El usuario ya existe', null);
            }
        } catch (err) {
            res.status(400);
            response = serviceResponse('Failed', err.message, null);
        }

        res.json(response);
    },
    async login(req, res) {
        let response;
        try {
            const usuario = await Usuario.findOne({
                where: {
                    nombre_usuario: req.body.nombre_usuario,
                    password: req.body.password
                }
            });
            if (usuario === null) {
                res.status(404);
                response = serviceResponse('Failed', 'Usuario o contraseña incorrectos', null);
            } else {
                res.status(200);
                response = serviceResponse('Succeeded', 'Logueado correctamente', usuario.id);
            }
        } catch (err) {
            res.status(400);
            response = serviceResponse('Failed', err.message, null);
        }

        res.json(response);
    }
}