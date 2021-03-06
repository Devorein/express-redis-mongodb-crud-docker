const Post = require('../models/Post');

const auth = async (req, res, next) => {
  const id = req.params.id;
  const { user } = req.session;

  try {
    const post = await Post.findById(id).populate('user');
    if (!post) {
      return res.status(404).json({
        status: 'failure',
        message: 'Post not found'
      });
    } else if (post.user._id.toString() !== user._id.toString()) {
      return res.status(401).json({
        status: 'failure',
        message: 'Unauthenticated'
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: 'failure',
      message: err.message
    });
  }

  next();
};

module.exports = auth;
