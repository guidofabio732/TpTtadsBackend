const tipo_maquinaController = require('../controllers/tipo_maquina');

const express = require('express');

const router = express.Router();

// list
router.get('/list', tipo_maquinaController.list);

// create
router.post('/create', tipo_maquinaController.create);

// update
router.post('/update', tipo_maquinaController.update);

// delete
router.delete('/delete/id/:id', tipo_maquinaController.delete);

module.exports = router;