const mongoose = require('mongoose')
mongoose.Promise = global.Promise

require('dotenv').config('')


const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD  

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
