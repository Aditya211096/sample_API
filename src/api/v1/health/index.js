const express = require('express');
const validate = require('express-validation');
const controller = require('./health.controller');
const validation = require('./health.validation');

const router = express.Router();

router.route('/')
  .get(validate(validation.health), controller.health);

module.exports = router;
