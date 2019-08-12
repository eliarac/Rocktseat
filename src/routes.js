const express = require('express');

const routes = express.Router();

routes.get('/',(req, res) => {

    return res.json({message : `Oi ${req.query.name}` });

});

// para expor/ exportar algum arquivo
// criar algo 
routes.get('/',(req, res) => {

    return res.json({message : `Oi ${req.query.name}` });

});
routes.post('/devs', (req, res) => {
    
    console.log(req.body);

    return res.json({ok: true});
});


module.exports = routes;