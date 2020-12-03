const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})