const Post = require('../models/Post');

const auth = async (req, res, next) => {
  const id = req.params.id;
  const { user } = req.session;

  const post = await Post.findById(id).populate('user');
  if (!post) {
    return res.status(404).json({
      status: 'failure',
      message: 'Post not found'
    });
  } else if (post.user._id !== user.id) {
    return res.status(401).json({
      status: 'failure',
      message: 'Unauthenticated'
    });
  }

  next();
};

module.exports = auth;
