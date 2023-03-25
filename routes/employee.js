const express = require('express');
const { authenticate } = require('../middlewares/auth');
const { validateEmployeeRequest, verifyRequest } = require('../middlewares/validation');

const {
    employeeRegister, getEnquiries, employeeLogin, claimEnquiry, fetchClaimedEnquiries,
} = require('../modules/employee');

const employeeRouter = express.Router();

employeeRouter.route('/register').post(validateEmployeeRequest('register'), verifyRequest, employeeRegister); // Employee Registration
employeeRouter.route('/login').post(validateEmployeeRequest('login'), verifyRequest, employeeLogin); // Login API

employeeRouter.use(authenticate); // Using authentication to authenticate below APIs
employeeRouter.route('/enquiry').get(getEnquiries); // Get all unclaimed enquiry
employeeRouter.route('/claimed-enquiry').get(fetchClaimedEnquiries); // Get all claimed enquiries of the logged in employee
employeeRouter.route('/claim/:formId').put(validateEmployeeRequest('claim-enquiry'), verifyRequest, claimEnquiry); // Claim enquiries

module.exports = employeeRouter;
