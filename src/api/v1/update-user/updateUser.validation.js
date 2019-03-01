const Joi = require('joi');

exports.updateUser = {
    id: Joi.number().integer().required(),
    username: Joi.string().required()
};
