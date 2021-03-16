/* Controllers */
const tipo_maquinaController = require('../controllers/tipo_maquina');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.get('/api/tipo_maquina/list', tipo_maquinaController.list);
};