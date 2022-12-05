

const mongoose = require('mongoose');
const dotenv = require('dotenv');




const DB_USER = 'claudiiofritzen'
const DB_PASSWORD = encodeURIComponent('5SCMkMHLmjpRiCe9')

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.lwdb9ap.mongodb.net/?retryWrites=true&w=majority`
)
.then( () => {
    console.log('Conectamos ao MongoDB!')
    
})
.catch((err) => {
    console.log("esta dando erro aqui.")
    console.log(err)
    
})

//module.exports = Banco