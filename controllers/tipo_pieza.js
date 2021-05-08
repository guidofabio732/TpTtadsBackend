const {Sequelize, Op} = require('sequelize');
const tipo_pieza = require('../models').tipo_pieza;
module.exports = {
    getByDesc(req, res) {
        return tipo_pieza.findAll({
            where: {
                descp: {
                    [Op.like]: `%${req.params.descp}%`
                }
            }
        })
            .then(tipos_piezas => res.status(200).json(tipos_piezas))
            .catch(error => res.status(404).send(error));
    },
    list(_, res) {
        return tipo_pieza.findAll({})
            .then(tipo_pieza => res.status(200).send(tipo_pieza))
            .catch(error => res.status(400).send(error))
    },
    create(req, res) {
        return tipo_pieza
            .create({
                descp: req.body.descp,
                cant: req.body.cant
            })
            .then(tipo_pieza => res.status(200).json(tipo_pieza))
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        return tipo_pieza.update({
            descp: req.body.descp,
            cant: req.body.cant
        }, {
            returnig: true,
            where: {
                id: req.body.id,
            },
        })
            .then(updatedTipoPieza => res.status(200).json(updatedTipoPieza))
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return tipo_pieza.destroy({
            where: {
                id: req.body.id
            }
        })
            .then(deletedTipoPieza => res.status(200).json(deletedTipoPieza))
            .catch(error => res.status(400).send(error));
    }
};