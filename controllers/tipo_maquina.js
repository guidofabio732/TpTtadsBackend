const Sequelize = require('sequelize');
const tipo_maquina = require('../models').tipo_maquina;
module.exports = {
    list(_, res) {
        return tipo_maquina.findAll({})
            .then(tipo_maquina => res.status(200).send(tipo_maquina))
            .catch(error => res.status(400).send(error))
    },
    create(req, res) {
        return tipo_maquina
            .create ({
                descp: req.body.descp,
            })
            .then(tipo_maquina => res.status(200).json(tipo_maquina))
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        return tipo_maquina.update({
            descp: req.body.descp
        }, {
            where: {
                id: req.body.id,
            },
        })
            .then(updatedTipoMaquina => res.status(200).json(updatedTipoMaquina))
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return tipo_maquina.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(deletedTipoMaquina => res.status(200).json(deletedTipoMaquina))
            .catch(error => res.status(400).send(error));
    }
};