const tipo_piezaController = require('../controllers/tipo_pieza');
const express = require('express');
const router = express.Router();

// get by description/name
router.get('/list/:descp', tipo_piezaController.getByDesc);

//list
router.get('/list', tipo_piezaController.list);

//create
router.post('/create', tipo_piezaController.create);

//update
router.post('/update', tipo_piezaController.update);

// delete
router.delete('/delete/id/:id', tipo_piezaController.delete);

module.exports = router;