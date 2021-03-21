const tipo_piezaController = require('../controllers/tipo_pieza');
const express = require('express');
const router = express.Router();

//list
router.get('/list', tipo_piezaController.list);

//create
router.post('/create', tipo_piezaController.create);

//update
router.post('/update', tipo_piezaController.update);

// delete
router.delete('/delete', tipo_piezaController.delete);

module.exports = router;