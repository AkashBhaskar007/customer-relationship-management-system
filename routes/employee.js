const express = require('express');
const { authenticate } = require('../middlewares/auth');
const {
    employeeRegister, getEnquiries, employeeLogin, claimEnquiry, fetchClaimedEnquiries,
} = require('../modules/employee');

const employeeRouter = express.Router();

employeeRouter.route('/register').post(employeeRegister);
employeeRouter.route('/login').post(employeeLogin);
employeeRouter.use(authenticate);
employeeRouter.route('/enquiry').get(getEnquiries);
employeeRouter.route('/claimed-enquiry').get(fetchClaimedEnquiries);

employeeRouter.route('/claim/:formId').put(claimEnquiry);

module.exports = employeeRouter;
