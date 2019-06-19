const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "pug");


// Rota Cadastro
let usuario = require("./rotas/usuario");
app.use("/usuario",usuario);

const PORT = process.env.port || 3000
app.listen(PORT);
console.log(`Listening to ${PORT}`);