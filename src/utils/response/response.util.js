/**
 * Response.util.js Utility
 *
 */
const Response = (status, message, response = {}) => {
  const result = {
    responseCode: status,
    responseMessage: message,
    response
  };
  return result;
};


module.exports = Response;
