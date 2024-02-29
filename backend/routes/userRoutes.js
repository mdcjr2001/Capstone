const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

// http://localhost:8000/

// Get User
router.get('/', (res) => {
    controllers.user.getUsers(res)
})

// Create User
router.post('/', (res) => {
    controllers.user.createUsers(res)
})

// Delete User
router.delete('/', (res) => {
    controllers.user.deleteUsers(res)
})

// Update User
router.put('/', (res) => {
    controllers.user.updateUsers(res)
})


module.exports = router