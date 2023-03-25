const jwt = require('jsonwebtoken');
const { response } = require('../../utils/response');
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
        });
        if (enquiry.length === 0) return response.success(res, messages.badRequest.noEnquiryClaimed);
        return response.success(res, messages.success.claimed, enquiry);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = fetchClaimedEnquiries;
