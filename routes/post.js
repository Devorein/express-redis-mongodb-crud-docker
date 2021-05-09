const express = require('express');

const PostController = require('../controllers/post');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(PostController.getAllPosts)
  .post(authMiddleware, PostController.createPost);

router
  .route('/:id')
  .get(PostController.getPostById)
  .patch(authMiddleware, PostController.updatePost)
  .delete(authMiddleware, PostController.deletePost);

module.exports = router;
