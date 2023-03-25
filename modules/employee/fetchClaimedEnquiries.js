const jwt = require('jsonwebtoken');
const { response } = require('../../utils');
const { messages } = require('../../app-config');
const { Form } = require('../../models');

const fetchClaimedEnquiries = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = await jwt.verify(token, process.env.SECRET);
        const enquiry = await Form.findAll({
            where: {
                claimedBy: decoded.id,
            },
            attributes: ['clientName', 'clientEmail', 'courseInterest'],
        });
        if (enquiry.length === 0) return response.success(res, messages.badRequest.noEnquiryClaimed);
        return response.success(res, messages.success.claimed, enquiry);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = fetchClaimedEnquiries;
