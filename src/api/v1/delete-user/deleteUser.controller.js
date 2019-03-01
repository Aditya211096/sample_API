const httpStatus = require('http-status');
const postgresql = require('../../../services/postgresql');
const Response = require('../../../utils/response');
const { generateError } = require('../../../utils/APIError');
const {
  routes,
  services,
  codes,
  getErrorCode
} = require('../../../utils/ErrorCode');


/**
 * deleteUser
 * @public
 * 
 */
exports.deleteUser = async (req, res, next) => {
  try {
    const params = req.body
    postgresql.deleteUser(params).then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'deleteUser',
        getErrorCode(routes.deleteUser, services.sample, codes.deleteUserError),
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
