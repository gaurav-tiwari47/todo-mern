//Import statement
const express = require('express')
//Creating instance
const app = express();
app.use(express.json())

//Definning port
const PORT = 9694;

//starting server
app.listen(PORT,() => {
    console.log(`Server started at ${PORT}`)
})

//routing
app.get('/',(req,res) => {
    res.send(`Hello saurav`)
})

const { dbConnect } = require('./config/database.js')
dbConnect();

//mounting
const router = require('./routes/route.js')
app.use('/api/v1',router)
