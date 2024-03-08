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
router.delete('/:id', (res) => {
    Controllers.user.deleteUsers(res)
})

// Update User
router.put('/:id', (res) => {
    Controllers.user.updateUsers(res)
})

// router.get('/profile', authenticate, (req, res) => {
//     res.json({ message: `Welcome ${req.user.username}` });
// });


module.exports = router