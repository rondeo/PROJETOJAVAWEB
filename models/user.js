const mongoose = require("mongoose");

const UsuarioCampos = mongoose.Schema({
    usuario:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    },
    restricao:{
        type: String,
        required: true
    }    
});

const Usuario = module.exports = mongoose.model("Usuario", UsuarioCampos);