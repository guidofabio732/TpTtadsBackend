const Sequelize     = require('sequelize');
const maquina_pieza       = require('../models').maquina_pieza;
module.exports = {
 list(_, res) {
     return maquina_pieza.findAll({})
        .then(maquina_pieza => res.status(200).send(maquina_pieza))
        .catch(error => res.status(400).send(error))
 },
 create(req, res) {
    return maquina_pieza
        .create ({
             id_pieza: req.params.id_pieza,
             id_maquina: req.params.id_maquina,
             cant: req.params.cant
        })
        .then(maquina_pieza => res.status(200).send(maquina_pieza))
        .catch(error => res.status(400).send(error))
 },
};