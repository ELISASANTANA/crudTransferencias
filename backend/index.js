/* Atividade: Começar uma aplicação nova como essa que acabamos de terminar o backend.
Nessa atividade vocês devem criar o backend de uma aplicação.
Essa aplicação vai gerenciar as transferências de uma conta bancária. Para isso, vocês devem criar um novo database com uma tabelas com os seguintes campos: id_tranferencia, nomeCliente, valor, contaCliente.
Na construção desse backend vocês desenvolver todo o crud para esse data base. */

require('./config/conexao')

const express = require('express')
const app = express()

const porta = 3000

app.use(express.json())

const rotasTransferencias = require('./rotas')

// para todas as rotas do arq rotas considerar na url o /tarefas antes da rota definida no rotas.js
app.use('/transferencias', rotasTransferencias)


app.listen(porta, ()=>{
    console.log('Server running', porta)
})