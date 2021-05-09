const User = require('../models/User');

async function signup(req, res, next) {
  try {
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
}

module.exports = {
  signup
};
