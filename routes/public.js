const express = require('express');
const { addEnquiry } = require('../modules/public');

const publicRouter = express.Router();

publicRouter.route('/enquire').post(addEnquiry);
module.exports = publicRouter;
