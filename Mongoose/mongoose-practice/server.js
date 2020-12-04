// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api.js')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true,  useUnifiedTopology: true })

app.use('/', api)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
