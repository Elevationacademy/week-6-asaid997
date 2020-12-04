const express = require('express')
const router = express.Router()

const Person = require('../models/Persons.js')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

router.post('/people/:person', function (req, res) {
    console.log(req.params.person)
    const person = JSON.parse(req.params.person)
    new Person(person).save()
    res.end()
})

router.put('/people/:id', function (req, res) {
    const { id } = req.params
    console.log(id)
    Person.findByIdAndUpdate(`${id}`, { age: 80 }, { new: true, useFindAndModify: false }, function (err, person) {
        res.send(person)
    })
})

router.delete('/people', function (req, res) {
    Person.find({}, function (err, person) {
        res.send(person)
        person.forEach(p => p.remove(err => console.log(err)))
    })
})

module.exports = router
