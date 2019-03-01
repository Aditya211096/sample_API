const httpStatus = require('http-status');
const postgresql = require('../../../services/postgresql');
const Response = require('../../../utils/response');

/**
 * createUser
 * @public
 */
exports.createUser = async (req, res, next) => {
  try {
    const params = {
      username: req.body.username
    }
    postgresql.createUser(params).then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'createUser',
        getErrorCode(routes.deleteUser, services.sample, codes.createUserError),
        error.message,
        {
        }
      );
      errorMsg.status = httpStatus.BAD_REQUEST;
      throw errorMsg;
    })
  } catch (ex) {
    return next(ex)
  }
};
