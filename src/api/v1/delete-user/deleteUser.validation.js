const Joi = require('joi');

exports.deleteUser = {
    id: Joi.number().integer().required()
};
