const express = require('express');
const router = express.Router();
let Controllers = require('../controllers')

// http://localhost:8000/

// Get User http://localhost:8001/api/posts
router.get('/', (req, res) => {
    Controllers.post.getPosts(res)
})

// Create User http://localhost:8001/api/posts/createpost/
router.post('/createpost', (req, res) => {
    Controllers.post.createPosts(req.body, res);
})

// Delete User http://localhost:8001/api/posts/<id>
router.delete('/:id', (req, res) => {
    Controllers.post.deletePosts(req, res)
})

// Update User http://localhost:8001/api/posts/<id>
router.put('/:id', (req, res) => {
    Controllers.post.updatePosts(req, res)
})

// router.get('/profile', authenticate, (req, res) => {
//     res.json({ message: `Welcome ${req.user.username}` });
// });


module.exports = router