const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_banco'
})

conexao.connect((erro)=>{
    if(erro) throw erro
    console.log('db conectado')
})

module.exports = conexao