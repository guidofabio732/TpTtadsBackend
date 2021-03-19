const Sequelize = require('sequelize');
const tipo_maquina = require('../models').tipo_maquina;
module.exports = {
    list(_, res) {
        return tipo_maquina.findAll({})
            .then(tipo_maquina => res.status(200).send(tipo_maquina))
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        return tipo_maquina.update({
            descp: req.body.descp
        }, {
            returnig: true,
            where: {
                id: req.body.id,
            },
        })
            .then(updatedTipoMaquina => res.status(200).json(updatedTipoMaquina))
            .catch(error => res.status(400).send(error));
    }
};