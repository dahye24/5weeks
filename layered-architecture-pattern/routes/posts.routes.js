// routes/posts.routes.js

const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts.controller'); //posts.controller에서 가져온거 할당
const postsController = new PostsController();

router.get('/', postsController.getPosts);
router.post('/', postsController.createPost);

module.exports = router;