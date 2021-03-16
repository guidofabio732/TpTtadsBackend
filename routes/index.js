/* Controllers */
const tipo_maquinaController = require('../controllers/tipo_maquina');
const tipo_piezaController = require('../controllers/tipo_pieza');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.get('/api/tipo_maquina/list', tipo_maquinaController.list);
   app.get('/api/tipo_pieza/list', tipo_piezaController.list);
};