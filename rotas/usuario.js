const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();
const sql = require("mssql");

let Usuario = require("../models/user");

app.use(bodyParser.json());

router.get("/cadastro", function(req,res){
    res.render("cadastro");
});

router.post("/cadastro",function(req,res){
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    const restricao = req.body.restricao;

    let novousuario = new Usuario({
        usuario:usuario,
        senha:senha,
        restricao:restricao
    })
    novousuario.save();
    let conexao = {
        user: 'sa',
        password: 'Vs120499',
        server: 'sqlserver', 
        database: 'DBA_VSOFT' 
    };
    sql.connect(conexao, function (err) {
    
        if (err) console.log(err);

        var consulta = new sql.Request()

        consulta.query(`INSERT INTO dba.Cadastro Values ('${usuario}','${senha}',${restricao})`, function (err, recordset) {
            
        });
    });
    sql.close();
    res.redirect("/usuario/login");
    
});

router.get("/login",function(req,res){
    res.render("login");
});

router.post("/login",function(req,res){
    const usuario = req.body.usuario;
    const senha = req.body.senha;
  
    let conexao = {
        user: 'sa',
        password: 'Vs120499',
        server: 'sqlserver', 
        database: 'DBA_VSOFT' 
    };
    sql.connect(conexao, function (err) {
    
        if (err) console.log(err);

        var consulta = new sql.Request()

        consulta.query(`SELECT usuario, senha FROM dba.Cadastro WHERE usuario = ${usuario} and senha = ${senha}`, function (err, resultado) {
            if(resultado.rowsAffected > 0){
                res.redirect("/usuario/admin");
            }else{
                res.redirect("/usuario/login");
            }
        });
    });
    //sql.close();
});

router.get("/admin",function(req,res){
    res.render("admin");
});
module.exports = router