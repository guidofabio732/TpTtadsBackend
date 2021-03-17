const Sequelize     = require('sequelize');
const tipo_pieza       = require('../models').tipo_pieza;
module.exports = {
 list(_, res) {
     return tipo_pieza.findAll({})
        .then(tipo_pieza => res.status(200).send(tipo_pieza))
        .catch(error => res.status(400).send(error))
 },
};