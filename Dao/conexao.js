

function consultaBanco(usuario, senha){
    var conexao = {
        user: 'sa',
        password: 'Vs120499',
        server: 'sqlserver', 
        database: 'DBA_VSOFT' 
    };
    sql.connect(conexao, function (err) {
    
        if (err) console.log(err);

        var consulta = new sql.Request()

        consulta.query(`INSERT INTO dba.Cadastro Values ('${usuario}','${senha}')`, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
}

module.exports