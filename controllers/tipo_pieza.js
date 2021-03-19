const Sequelize = require('sequelize');
const tipo_pieza = require('../models').tipo_pieza;
module.exports = {
    list(_, res) {
        return tipo_pieza.findAll({})
            .then(tipo_pieza => res.status(200).send(tipo_pieza))
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
    }
};