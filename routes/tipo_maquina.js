const tipo_maquinaController = require('../controllers/tipo_maquina');

const express = require('express');
const tipo_maquina = require('../controllers/tipo_maquina');

const router = express.Router();

// get by description/name
router.get('/list/:descp', tipo_maquina.getByDesc);

// list
router.get('/list', tipo_maquinaController.list);

// create
router.post('/create', tipo_maquinaController.create);

// update
router.post('/update', tipo_maquinaController.update);

// delete
router.delete('/delete/id/:id', tipo_maquinaController.delete);

module.exports = router;