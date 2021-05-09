const Post = require('../models/Post');

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      status: 'success',
      data: {
        posts
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      data: {
        posts: null
      }
    });
  }
};

const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        post
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      data: {
        post: null
      }
    });
  }
};

const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        post
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      data: {
        post: null
      }
    });
  }
};

const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        post
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      data: {
        post: null
      }
    });
  }
};

const deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        deleted: true
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      data: {
        deleted: true
      }
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
