const maquina_piezaController = require('../controllers/maquina_pieza');
const express = require('express');
const router = express.Router();

//list
router.get('/list', maquina_piezaController.list);

//create
router.post('/create', maquina_piezaController.create);

//update
router.post('/update', maquina_piezaController.update);

// delete
router.delete('/delete', maquina_piezaController.delete);

module.exports = router;