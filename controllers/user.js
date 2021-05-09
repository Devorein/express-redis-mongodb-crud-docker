const argon2 = require('argon2');
const User = require('../models/User');

async function signup(req, res, next) {
  try {
    try {
      const hashedPassword = await argon2.hash(req.body.password);
      req.body.password = hashedPassword;
      const user = await User.create(req.body);
      res.status(200).json({
        status: 'success',
        data: {
          user
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'failure',
        message: err.message
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      message: err.message
    });
  }
}

module.exports = {
  signup
};
