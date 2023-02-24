const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const routes = require('./routes/ToDoRoute')

const app = express()

const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log(`Connected to MongoDB`))
.catch((err) => console.log(err))

app.get('./get',() => {
    
})

app.use(routes)

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))