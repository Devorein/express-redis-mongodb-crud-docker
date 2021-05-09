const express = require('express');

const PostController = require('../controllers/post');
const authMiddleware = require('../middleware/auth');
const ownDataMiddleware = require('../middleware/ownData');

const router = express.Router();

router
  .route('/')
  .get(PostController.getAllPosts)
  .post(authMiddleware, PostController.createPost);

router
  .route('/:id')
  .get(PostController.getPostById)
  .patch(authMiddleware, ownDataMiddleware, PostController.updatePost)
  .delete(authMiddleware, ownDataMiddleware, PostController.deletePost);

module.exports = router;
