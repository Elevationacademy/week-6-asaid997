/*=====================================================
Our Setup -
Feel free to ignore all of this and skip to the questions at the end
=======================================================*/
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

var request = require('request')
var mongoose = require('mongoose')
var Book = require("./models/BookModel.js")
var Person = require("./models/PersonModel.js")

mongoose.connect("mongodb://localhost/mongoose-practice", {useNewUrlParser: true, useUnifiedTopology: true})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/books/1', function (req, res) {
  Book.find({ "pages": {$gte: 200, $lte: 500}}, function (err, books) {
      res.send(books)
  })
})

app.get('/books/2', function (req, res) {
  Book.find({ "rating": {$lt: 5}}, null, {sort: {author: 1}}, function (err, books) {
      res.send(books)
  })
})

app.get('/books/3', function (req, res) {
  Book.find({ "genres": "Fiction"},null, {skip: 2, limit: 3}, function (err, books) {
      res.send(books)
  })
})


app.get('/people/1', function (req, res) {
  Person.find({ weight: {$gte: 100}, salary: {$gte: 30000}}, function (err, person) {
      res.send(person)
  })
})

app.get('/people/2', function (req, res) {
  Person.find({$or: [{weight: {$gte: 100}},{ salary: {$gte: 30000}}]}, function (err, person) {
      res.send(person)
  })
})

app.get('/people/3', function (req, res) {
  Person.find({$and: [{$or: [{hair: "grey"},{ eyes: "grey"}]},{weight: {$lte: 70}}]}, function (err, person) {
      res.send(person)
  })
})

app.get('/people/4', function (req, res) {
  Person.find({"kids.hair": "grey"}, function (err, person) {
      res.send(person)
  })
})

app.get('/people/5', function (req, res) {
  Person.find({"kids.weight": {$gte: 100} , weight: {$gte: 100}}, function (err, person) {
      res.send(person)
  })
})

/*=====================================================
Start the server:
=======================================================*/

app.listen(3000, function() {
  console.log("Server up and running on port 3000")
})

