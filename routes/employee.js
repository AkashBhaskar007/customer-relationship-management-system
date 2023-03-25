const express = require('express');
const { authenticate } = require('../middlewares/auth');
const {
    employeeRegister, getEnquiries, employeeLogin, claimEnquiry, fetchClaimedEnquiries,
} = require('../modules/employee');

const employeeRouter = express.Router();

employeeRouter.route('/register').post(employeeRegister); // Employee Registration
employeeRouter.route('/login').post(employeeLogin); // Login API

employeeRouter.use(authenticate); // Using authentication to authenticate below APIs
employeeRouter.route('/enquiry').get(getEnquiries); // Get all unclaimed enquiry
employeeRouter.route('/claimed-enquiry').get(fetchClaimedEnquiries); // Get all claimed enquiries of the logged in employee
employeeRouter.route('/claim/:formId').put(claimEnquiry); // Claim enquiries

module.exports = employeeRouter;
