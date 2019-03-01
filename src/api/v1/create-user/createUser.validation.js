const Joi = require('joi');

exports.createUser = {
  body: Joi.object().keys({
    username: Joi.string().required()
  })
};
