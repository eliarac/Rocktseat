const express = require('express');
const mongoose = require('mongoose');
const routes  = require('./routes');
const server  = express();

//  http
// POST -> formulario
// PUT DELETE -> nao é possivel enviar através do html 
// GET
mongoose.connect('mongodb+srv://eliara:eliana@cluster0-ofzlf.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser : true
});

server.use(express.json());
server.use(routes);
server.listen(8081);
//M - model , V - view , C - Controller -regra de negico