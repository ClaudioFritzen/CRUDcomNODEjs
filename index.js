// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()
// importando o models
const Person = require('./models/Person')
require('./db')



// forma de ler Json / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

/// criando rotas
app.post('/person', async(req, res) => {

    // tratando os dados do req.body
    const {name, salary, approved} = req.body

    // validação
    if (!name) {
        res.status(422).json({ error: 'O nome é obrigatório' })
    }
/* 
    const Person = {
        name,
        salary,
        aprroved,
    } */
    const newUser = new Person({ name, salary, approved })

    /// methodeo create do mongoose
    try {
      
        await newUser.save()
        res.status(201).json({message: 'Pessoa inserida com sucesso!'})
    }catch(err) { res.json({erro: err.message}) }
})

// rota inicial / endpoint
app.get('/', (req, res) => {

    // mostrar a requisição
    res.json({message: 'Oi teste!'})
})

// entregar uma porta 
app.listen(3000)