const express = require('express');
const router = express.Router();
let Controllers = require('../controllers/postController')

// http://localhost:8000/

// Get User
router.get('/post', (req, res) => {
    Controllers.post.getPosts(res)
})

// Create User
router.post('/createpost', (req, res) => {
    Controllers.post.createPosts(req.body, res);
})

// Delete User
router.delete('/:id', (req, res) => {
    Controllers.post.deletePosts(req, res)
})

// Update User
router.put('/:id', (req, res) => {
    Controllers.post.updatePosts(req, res)
})

// router.get('/profile', authenticate, (req, res) => {
//     res.json({ message: `Welcome ${req.user.username}` });
// });


module.exports = router