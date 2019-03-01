const httpStatus = require('http-status');

/**
 * health
 * @public
 */
exports.health = async (req, res, next) => {
  res.status(httpStatus.OK);
  return res.send('OK');
};
