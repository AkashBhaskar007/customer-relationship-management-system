const express = require('express');
const { addEnquiry } = require('../modules/public');
const { validatePublicRequest, verifyRequest } = require('../middlewares/validation');

const publicRouter = express.Router();

publicRouter.route('/enquire').post(validatePublicRequest('enquire'), verifyRequest, addEnquiry); // Add an enquiry from public

module.exports = publicRouter;
