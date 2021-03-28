const Sequelize = require('sequelize');
const usuario = require('../models').usuarios;

module.exports = {

    create(req, res) {
        return usuario
            .create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                nombre_usuario: req.body.nombre_usuario,
                password: req.body.password,
            })
            .then(() => res.status(200).send('Usuario creado'))
            .catch(err => res.status(400).send(err))
    }
}