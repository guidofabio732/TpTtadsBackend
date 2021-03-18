/* Controllers */
const tipo_maquinaController = require('../controllers/tipo_maquina');
const tipo_piezaController = require('../controllers/tipo_pieza');
const maquina_piezaController = require('../controllers/maquina_pieza');
const maquina_pieza = require('../controllers/maquina_pieza');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.get('/api/tipo_maquina/list', tipo_maquinaController.list);
   app.get('/api/tipo_pieza/list', tipo_piezaController.list);
   app.get('/api/maquina_pieza/list', maquina_piezaController.list);
   
   app.post('/api/tipo_pieza/create/descp/:descp/cant/:cant', tipo_piezaController.create);
   app.post('/api/tipo_maquina/create/descp/:descp', tipo_maquinaController.create);
   app.post('/api/maquina_pieza/create/id_pieza/:id_pieza/id_maquina/:id_maquina/cant/:cant', maquina_piezaController.create);
};