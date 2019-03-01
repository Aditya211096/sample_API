const express = require('express');
const validate = require('express-validation');
const controller = require('./members.controller');
const validation = require('./members.validation');

const router = express.Router();

router.route('/')
  .get(validate(validation.getMembers), controller.getMembers);

module.exports = router;