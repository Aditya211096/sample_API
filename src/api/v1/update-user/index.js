const express = require('express');
const validate = require('express-validation');
const controller = require('./updateUser.controller');
const validation = require('./updateUser.validation');

const router = express.Router();

router.route('/')
  .get(validate(validation.updateUser), controller.updateUser);

module.exports = router;