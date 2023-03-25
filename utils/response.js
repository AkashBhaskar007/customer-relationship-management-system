/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
const { httpStatusCodes, messages } = require('../app-config');
const loggerUtil = require('./logger');

const success = (res, message, data = null) => {
    const response = {
        status: true,
        message,
    };

    if (data) response.data = data;
    res.status(httpStatusCodes.OK).send(response);
};
const serverError = (res, error, message) => {
    loggerUtil.error({ message: error.toString(), level: 'error' });

    res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send({
        status: false,
        error: error.toString(),
        message: message || 'We are unable to process your request now. Please try again',
    });
};
const badRequestError = (res, message) => {
    res.status(httpStatusCodes.BAD_REQUEST).send({
        status: false,
        message,
    });
};
const authorizationError = (res, message) => {
    res.status(httpStatusCodes.UNAUTHORIZED).send({
        status: false,
        message: message || messages.auth.unauthorized
    })
}
module.exports = {
    success,
    serverError,
    badRequestError,
    authorizationError
};
