const express = require('express');
const usuarioController = require('../controllers/usuario');
const router = express.Router();

//getOne by usuario y pass (login)
router.post('/login', usuarioController.login);

//create
router.post('/register', usuarioController.register);


module.exports = router;