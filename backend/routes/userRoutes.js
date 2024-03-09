const express = require('express');
const router = express.Router();
let Controllers = require('../controllers')

// http://localhost:8000/

// Get User
router.get('/', (req, res) => {
    Controllers.user.getUsers(res)
})

// Create User
router.post('/create', (req, res) => {
    Controllers.user.createUsers(req.body, res);
})

// Delete User
router.delete('/:id', (req, res) => {
    Controllers.user.deleteUsers(req, res)
})

// Update User
router.put('/:id', (req, res) => {
    Controllers.user.updateUsers(req, res)
})

// router.get('/profile', authenticate, (req, res) => {
//     res.json({ message: `Welcome ${req.user.username}` });
// });


module.exports = router