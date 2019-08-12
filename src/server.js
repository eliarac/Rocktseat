const express = require('express');
const routes  = require('./routes');
const server  = express();

//  http
// POST -> formulario
// PUT DELETE -> nao é possivel enviar através do html 
// GET
server.use(express.json());
server.use(routes);
server.listen(8081);