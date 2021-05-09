const express = require('express');

const UserController = require('../controllers/user');

const router = express.Router();

router.route('/signup').post(UserController.signup);

module.exports = router;
