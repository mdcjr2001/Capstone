'use strict'
let Models = require('../models')

const getUsers = (res) => {
    // finds all users
    Models.User.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

// const createUsers = (data, res) => {
//     // Creates users
//     console.log(data)
//     new Models.User(data).save()
//     .then(data => res.send({result: 200, data: data}))
//     .catch(err => {
//         console.log(err);
//         res.send({result: 500, error: err.message})
//     })
// }

const createUsers = (data, res) => {
    console.log(data)
    new Models.User(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.status(500).send({ result: 500, error: err.message})
        // res.send({result: 500, error: err.message})
    })
}


const deleteUsers = (req, res) => {
    // Deletes all users
    Models.User.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

// const updateUsers = (req, res) => {
//     // Updates Users
//     Models.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(data => res.send({result: 200, data: data}))
//     .catch(err => {
//         console.log(err);
//         res.send({result: 500, error: err.message})
//     })
// }

const updateUsers = (req, res) => {
    console.log("updateUser:", req.body)
    Models.User.findByIdAndUpdate(req.params.id, req.body, { new: true} )
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.status(500).send({ result: 500, error: err.message})
        // res.send({result: 500, error: err.message})
    })
}


module.exports = {
    getUsers, updateUsers, createUsers, deleteUsers
}