const Sequelize = require('sequelize');
const Usuario = require('../models').usuarios;

// funcion que devuelve un objeto con el formato para responder las peticiones
const serviceResponse = require('../models/serviceResponse');

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config(); //recupero variables de configuracion

//se define acá porque no quiero exportarla, es privada.
function generateAccessToken(nombreUsuario) {
    // con process.env.TOKEN_SECRET accedo a la variable donde guarde el secret key
    // la funcion sign firma el token en base al usuario y el secret key y dura media hora
    return jwt.sign({ nombreUsuario: nombreUsuario}, process.env.SECRET_KEY, {expiresIn: '1800s'});
}

module.exports = {

    async register(req, res) {
        let response;
        try {
            const [usuario, created] = await Usuario.findOrCreate({ // si el usuario no existe lo crea
                where: { nombre_usuario: req.body.nombre_usuario },
                defaults: {
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    nombre_usuario: req.body.nombre_usuario,
                    password: req.body.password
                }
            });

            if (created) { // si no existe y lo creó, devuelvo el id
                res.status(200);
                response = serviceResponse('Succeeded', 'Usuario creado con exito', { 'id': usuario.id});

            } else { //si ya existe lo informa
                res.status(409);
                response = serviceResponse('Failed', 'El usuario ya existe', null);
            }
        } catch (err) {
            res.status(400);
            response = serviceResponse('Failed', err.message, null);
        }

        res.json(response); //devuelvo el objeto response completado son los datos segun corresponde
    },
    async login(req, res) {
        let response;
        try {
            const usuario = await Usuario.findOne({
                where: {
                    nombre_usuario: req.body.nombre_usuario,
                    password: req.body.password
                }
            });
            if (usuario === null) {
                res.status(401);
                response = serviceResponse('Failed', 'Usuario o contraseña incorrectos', null);
            } else {
                // genero el token que el nom usuario y lo devuelvo en el obj response
                const token = generateAccessToken(usuario.nombre_usuario);
                res.status(200);
                response = serviceResponse('Succeeded', 'Logueado correctamente', token);
            }
        } catch (err) {
            res.status(400);
            response = serviceResponse('Failed', err.message, null);
        }

        res.json(response);
    }
}