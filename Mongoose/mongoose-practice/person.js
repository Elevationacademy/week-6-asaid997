const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true, useUnifiedTopology: true})

const Schema = mongoose.Schema

const addressSchema = new Schema({
    city: String,
    street: String,
    apartment: Number
})

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    address: addressSchema
})

const Person = mongoose.model('person', personSchema, 'persons'); //<== persons will be the name of the collection

let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) //purposefully ignoring the `address` field

// p1.save()


// mongoose.connect('mongodb://localhost/computerDB', { useNewUrlParser: true, useUnifiedTopology: true})


// const computerSchema = new Schema({
//     maker: String,
//     price: Number
// })

// const computer = mongoose.model('computer', computerSchema, 'computers'); 

// let c1 = new computer({ maker: "Apple", price: 300000000 })
 
// c1.save()


Person.find({}, function (err, people) {
    console.log(people)
})

// let peoplePromise = Person.find({})

// peoplePromise.then(function (people) {
//     console.log(people)
// })

// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())


// Person.findById("5fc9d8d1fa832bbf9a2acdad", function (err, person) {
//     person.age += 10 //how time flies
//     person.save()
// }) // update 1

// Person.findByIdAndUpdate("5fc9d8d1fa832bbf9a2acdae", { age: 2 , firstName: "bator"}, {new: true} , function (err, person) {
//     console.log(person)
// }) // update 2

//delete

// Person.findById("5fc9d8d1fa832bbf9a2acdab", function (err, person) {
//     person.remove(function (err) {
//         console.log(err) //usually this will be `null`, unless something went wrong
//     })
// })
