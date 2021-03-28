/* Controllers */

module.exports = (app) => {
   // Importo todas las rutas
   const tipoMaquinaRoute = require('./tipo_maquina');
   const tipoPiezaRoute = require('./tipo_pieza');
   const maquinaPiezaRoute = require('./maquina_pieza');
   const usuarioRoute = require('./usuario');

   // Uso los middlewares
   app.use('/api/tipo_maquina', tipoMaquinaRoute);
   app.use('/api/tipo_pieza', tipoPiezaRoute);
   app.use('/api/maquina_pieza', maquinaPiezaRoute);
   app.use('/api/usuario', usuarioRoute);
   
   // Routes
   app.get('/api', (req, res) => res.status(200).send({
      message: 'Example project did not give you access to the api web services'
   }));
};