const jwt = require('jsonwebtoken');

// Funcion que autentica las rutas

function authenticateToken(req, res, next) {
   const authHeader = req.headers['authorization'];

   if (authHeader) {
      const token = authHeader.split(' ')[1];

      if (token === null) return res.sendStatus(401);

      jwt.verify(token, process.env.SECRET_KEY, (err, usuario) => {

         if (err) return res.sendStatus(403);

         console.log(usuario);

         req.usuario = usuario;

         next();

      });
   } else {
      res.sendStatus(401);
   }
}

module.exports = (app) => {

   //app.use('/api/tipo_maquina', authenticateToken);

   // Importo todas las rutas
   const tipoMaquinaRoute = require('./tipo_maquina');
   const tipoPiezaRoute = require('./tipo_pieza');
   const maquinaPiezaRoute = require('./maquina_pieza');
   const usuarioRoute = require('./usuario');

   // Uso los middlewares para /api
   // authenticateToken es el middleware para controlar acceso a cada ruta y authenticar usuario

   app.use('/api/tipo_maquina', authenticateToken, tipoMaquinaRoute);

   app.use('/api/tipo_pieza', authenticateToken ,tipoPiezaRoute);

   app.use('/api/maquina_pieza', authenticateToken , maquinaPiezaRoute);

   app.use('/api/usuario', usuarioRoute);

   // Routes
   app.get('/api', (req, res) => res.status(200).json({
      message: 'Estas en el index'
   }));
};