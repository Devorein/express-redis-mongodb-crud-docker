const express = require('express');

const PostController = require('../controllers/post');

const router = express.Router();

router
  .route('/')
  .get(PostController.getAllPosts)
  .post(PostController.createPost);

router
  .route('/:id')
  .get(PostController.getPostById)
  .patch(PostController.updatePost)
  .delete(PostController.deletePost);

module.exports = router;
