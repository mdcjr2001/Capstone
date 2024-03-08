let express = require('express');
let router = express.Router();
let Controllers = require('../controllers')

// http://localhost:8000/

// Get User
router.get('/', (req, res) => {
    Controllers.userController.getUsers(res)
})

// Create Users
router.post('/create', (req, res) => {
    Controllers.userController.createUsers(req.body, res);
})

// Delete Users
router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUsers(req, res)
})

// Update Users
router.put('/:id', (res) => {
    Controllers.userController.updateUsers(req, res)
})


module.exports = router;