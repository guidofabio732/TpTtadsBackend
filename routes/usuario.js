const express = require('express');
const usuarioController = require('../controllers/usuario');
const router = express.Router();

//list

//create
router.post('/create', usuarioController.create);

module.exports = router;