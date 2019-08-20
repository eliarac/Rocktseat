const { Schema, model} = require('mongoose');
//para armazenar o desenvolvedor no banco de dados
//estrutura
const DevSchema = new Schema({
    name: {
      type: String,  
      required: true,
    },
    user: {
      type: String,  
      required: true,
    },
    bio: String,
    avatar : {
        type: String,
        required: true,
    },
}, { 
    timestamps: true,
});

module.exports = model('Dev', DevSchema);

// createdAt , updateAt
// automatico do mongoose