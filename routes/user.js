const express = require('express');

const UserController = require('../controllers/user');

const router = express.Router();

router.route('/').get(UserController.getAllUsers);

router.route('/:id').get(UserController.getUserById);

module.exports = router;
