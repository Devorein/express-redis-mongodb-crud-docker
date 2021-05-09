const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Post must have a title']
  },
  body: {
    type: String,
    required: [true, 'Post must have a body']
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;
