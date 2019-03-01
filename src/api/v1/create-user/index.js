const express = require('express');
const validate = require('express-validation');
const controller = require('./createUser.controller');
const validation = require('./createUser.validation');

const router = express.Router();

router.route('/')
  .get(validate(validation.createUser), controller.createUser);

module.exports = router;