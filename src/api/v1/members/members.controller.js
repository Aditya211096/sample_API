const httpStatus = require('http-status');
const postgresql = require('../../../services/postgresql');
const Response = require('../../../utils/response');
const { generateError } = require('../../../utils/APIError');

/**
 * getUsers
 * @public
 * 
 */
exports.getMembers = async (req, res, next) => {
  try {
    postgresql.getMembers().then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'getMembers',
        getErrorCode(routes.getUser, services.sample, codes.getUserError),
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
