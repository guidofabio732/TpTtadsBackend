const { Op, Sequelize } = require('sequelize');
const maquina_pieza = require('../models').maquina_pieza;
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
    update(req, res) {
        return maquina_pieza.update({
            cant: req.body.cant
        }, {
            where: {
                [Op.and]: [
                    { id_pieza: req.body.id_pieza },
                    { id_maquina: req.body.id_maquina }
                ]
            },
        })
            .then(updatedMaquinaPieza => res.status(200).json(updatedMaquinaPieza))
            .catch(error => res.status(400).send(error));
    }
};