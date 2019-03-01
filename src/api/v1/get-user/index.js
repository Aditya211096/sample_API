const express = require('express');
const validate = require('express-validation');
const controller = require('./getUsers.controller');
const validation = require('./getUsers.validation');

const router = express.Router();

router.route('/')
  .get(validate(validation.getUsers), controller.getUsers);

module.exports = router;