require('dotenv').config()
const express = require("express");
const req = require('express/lib/request');

const app = express()
const porta = process.env.PORT || 3001;


app.get('/', (req, res) => {
    res.send("Olá Mundo!")
})

app.get('/Dashboard', (req, res) => {
    res.json({
        msg: 'Kramer',
        status: 200
    })
})

app.listen(porta,(res)=>{
    console.log(`🟢 Servidor rodando na porta ${porta} `)
})