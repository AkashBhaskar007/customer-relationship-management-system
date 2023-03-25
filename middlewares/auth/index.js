/* eslint-disable eqeqeq */
const jwt = require('jsonwebtoken');
const { response } = require('../../utils');

const authenticate = async (req, res, next) => {
    let token;
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            // eslint-disable-next-line prefer-destructuring
            token = req.headers.authorization.split(' ')[1];
        }
        if (!token) {
            return response.authorizationError(res);
        }
        const decoded = await jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        return next();
    } catch (error) {
        if (error.name == 'JsonWebTokenError' || error.name == 'TokenExpiredError') {
            return response.authorizationError(res);
        }
        return response.serverError(res, error);
    }
};
module.exports = {
    authenticate,
};
