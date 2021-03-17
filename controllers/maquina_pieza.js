const Sequelize     = require('sequelize');
const maquina_pieza       = require('../models').maquina_pieza;
module.exports = {
 list(_, res) {
     return maquina_pieza.findAll({})
        .then(maquina_pieza => res.status(200).send(maquina_pieza))
        .catch(error => res.status(400).send(error))
 },
};