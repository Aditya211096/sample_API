const APIError = require('./APIError');
const { wrapError } = require('./../ErrorCode');

/**
 * Generate auth error
 * @param  {String} status              HTTP Status
 * @param  {String} route               API Route
 * @param  {String} message             IDP Error Message
 * @param  {String} errorCode           Detail error code
 * @param  {String} title               Detail error title
 * @param  {String} description         Detail error description
 * @param  {String} debugDescription    Detail debug description
 */
const generateError = (route, errorCode, debugDescription, errorAttributes) => new APIError({
  message: 'Internal Server Error',
  route,
  status: 400,
  errors: [
    wrapError(
      errorCode,
      'Oops! Something went wrong',
      'We had some trouble logging you in - please contact customer support',
      debugDescription,
      errorAttributes
    )
  ]
});


module.exports = {
  generateError
};
