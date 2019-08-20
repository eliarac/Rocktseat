const express = require('express');
const DevController = require('./controllers/DevController');
const routes = express.Router();



//routes.get('/',(req, res) => {
//    return res.json({message : `Oi ${req.query.name}` });
//});

// para expor/ exportar algum arquivo
// criar algo 
//routes.get('/',(req, res) => {
//
//    return res.json({message : `Oi ${req.query.name}` });
//});

// criar um desenvolvedor
routes.post('/devs', DevController.store);


module.exports = routes;