const messages = {
    success: {
        registered: 'Employee registered successfully',
        formSubmitted: 'Form has been submitted',
        listFetched: 'Enquiry list fetched',
        noEnquiry: 'No enquiries found',
        claimed: 'Enquiry claimed',
    },
    badRequest: {
        emailExists: 'User with this email already exists',
        noUser: 'No employee found, please register',
        incorrectPassword: 'Incorrect password',
        noEnquiryClaimed: 'No enquiry claimed',
    },
    auth: {
        unauthorized: 'Please login to continue',
    },
};
module.exports = messages;
