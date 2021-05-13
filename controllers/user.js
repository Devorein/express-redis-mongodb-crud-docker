const User = require('../models/User');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: {
        users
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      message: err.message
    });
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
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
};

const updateUser = async (req, res, next) => {
  try {
    const { user } = req.session;
    res.status(200).json({
      status: 'success',
      data: {
        user: await User.findByIdAndUpdate(user._id, req.body, {
          new: true,
          runValidators: true
        })
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      message: err.message
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser
};
