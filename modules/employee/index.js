const employeeRegister = require('./register');
const employeeLogin = require('./login');
const getEnquiries = require('./fetchEnquiries');
const claimEnquiry = require('./claim');

module.exports = {
    employeeRegister,
    employeeLogin,
    getEnquiries,
    claimEnquiry,
};
