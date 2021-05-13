const express = require('express');

const UserController = require('../controllers/user');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(UserController.getAllUsers)
  .patch(authMiddleware, UserController.updateUser);

router.route('/:id').get(UserController.getUserById);

module.exports = router;
