'use strict'
let Models = require('../models')

const getPosts = (res) => {
    // finds all posts
    Models.Post.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const createPosts = (data, res) => {
    console.log('createpost',data)
    new Models.Post(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.status(500).send({ result: 500, error: err.message})
        // res.send({result: 500, error: err.message})
    })
}

const deletePosts = (req, res) => {
    // Deletes all users
    Models.Post.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const updatePosts = (req, res) => {
    console.log("updatePost:", req.body)
    Models.Post.findByIdAndUpdate(req.params.id, req.body, { new: true} )
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.status(500).send({ result: 500, error: err.message})
        // res.send({result: 500, error: err.message})
    })
}

module.exports = {
    getPosts, updatePosts, createPosts, deletePosts
}