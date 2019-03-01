const httpStatus = require('http-status');
const postgresql = require('../../../services/postgresql');
const Response = require('../../../utils/response');

/**
 * updateUser
 * @public
 * 
 */
exports.updateUser = async (req, res, next) => {
  try {
    const params = req.body
    postgresql.updateuser(params).then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'updateUsers',
        getErrorCode(routes.updateUser, services.sample, codes.updateUserError),
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
