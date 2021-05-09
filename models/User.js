const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'User must have an username'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'User must have an username']
  }
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
