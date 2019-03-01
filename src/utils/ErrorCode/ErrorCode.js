/* eslint-disable */
const httpStatus = require('http-status');

exports.routes = {
  createUser: 'createUser',
  getUser: 'getUser',
  updateUser: 'updateUser',
  deleteUser: 'deleteUser'
};

exports.errorCodes = {
  '01': httpStatus.OK,
  '101': httpStatus.FORBIDDEN,
  '102': httpStatus.FORBIDDEN,
  '103': httpStatus.BAD_REQUEST,
  '200': httpStatus.UNAUTHORIZED
};

exports.services = {
  sample: 'sample'
};

exports.codes = {
  createUserError: 'createUserError',
  getUserError: 'getUserError',
  updateUserError: 'updateUserError',
  deleteUserError: 'deleteUserError'
};

exports.getErrorCode = (route, service, code) => {
  const result = ['sample', route, service, code].join(':');
  return result;
};

exports.wrapError = (errCode, errTitle, errDesc, errDebugDesc, errAttributes) => {
  const result = {
    errorCode: errCode,
    errorTitle: errTitle,
    errorDescription: errDesc,
    errorDebugDescription: errDebugDesc,
    errorAttributes: errAttributes
  };
  return result;
};

exports.convertSSOCode = (ssoCode) => {
  switch (ssoCode) {
    case '01':
      return httpStatus.OK;
    case '101':
      return httpStatus.FORBIDDEN;
    case '102':
      return httpStatus.FORBIDDEN;
    case '103':
      return httpStatus.BAD_REQUEST;
    case '200':
      return httpStatus.UNAUTHORIZED;
  }
  return httpStatus.BAD_REQUEST;
};
