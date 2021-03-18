const Sequelize     = require('sequelize');
const tipo_maquina       = require('../models').tipo_maquina;
module.exports = {
 list(_, res) {
     return tipo_maquina.findAll({})
        .then(tipo_maquina => res.status(200).send(tipo_maquina))
        .catch(error => res.status(400).send(error))
 },
 create(req, res) {
    return tipo_maquina
        .create ({
             descp: req.params.descp,
        })
        .then(tipo_maquina => res.status(200).send(tipo_maquina))
        .catch(error => res.status(400).send(error))
 },
};