const argon2 = require('argon2');
const User = require('../models/User');

async function signup(req, res, next) {
  try {
    try {
      const hashedPassword = await argon2.hash(req.body.password);
      req.body.password = hashedPassword;
      const user = await User.create(req.body);
      req.session.user = user;
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

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select('+password');
    if (!user) {
      return res.status(404).json({
        status: 'failure',
        message: 'User does not exist'
      });
    } else {
      try {
        const isCorrectPassword = await argon2.verify(user.password, password);
        if (!isCorrectPassword) {
          return res.status(404).json({
            status: 'failure',
            message: 'username or password is incorrect'
          });
        } else {
          req.session.user = user;
          return res.status(200).json({
            status: 'success',
            data: {
              user
            }
          });
        }
      } catch (err) {
        return res.status(400).json({
          status: 'failure',
          message: err.message
        });
      }
    }
  } catch (err) {
    return res.status(400).json({
      status: 'failure',
      message: err.message
    });
  }
}

module.exports = {
  signup,
  login
};
