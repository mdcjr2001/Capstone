const express = require('express');
const router = express.router();
const controllers = require('../controllers')

// http://localhost:8000/

router.get('/', (res) => {
    controllers.user.getUsers(res)
})


module.exports = router