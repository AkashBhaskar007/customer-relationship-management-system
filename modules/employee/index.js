const employeeRegister = require('./register');
const employeeLogin = require('./login');
const getEnquiries = require('./fetchEnquiries');
const claimEnquiry = require('./claim');
const fetchClaimedEnquiries = require('./fetchClaimedEnquiries');

module.exports = {
    employeeRegister,
    employeeLogin,
    getEnquiries,
    claimEnquiry,
    fetchClaimedEnquiries,
};
