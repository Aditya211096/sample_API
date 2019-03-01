const express = require('express');
const validate = require('express-validation');
const controller = require('./deleteUser.controller');
const validation = require('./deleteUser.validation');

const router = express.Router();

router.route('/')
  .get(validate(validation.deleteUser), controller.deleteUser);

module.exports = router;