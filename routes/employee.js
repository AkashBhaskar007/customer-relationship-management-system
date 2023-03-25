const express = require('express');
const { employeeRegister, getEnquiries, employeeLogin, claimEnquiry } = require('../modules/employee');

const employeeRouter = express.Router();

employeeRouter.route('/register').post(employeeRegister);
employeeRouter.route('/login').post(employeeLogin);

employeeRouter.route('/enquiry').get(getEnquiries);
employeeRouter.route('/enquiry/:formId').put(claimEnquiry);

module.exports = employeeRouter;
