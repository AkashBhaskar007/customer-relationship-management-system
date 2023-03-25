const { response } = require('../../utils');
const { messages } = require('../../app-config');
const { Form } = require('../../models');

const fetchClaimedEnquiries = async (req, res) => {
    try {
        const enquiry = await Form.findAll({
            where: {
                claimedBy: req.user.id,
            },
            attributes: ['id', 'clientName', 'clientEmail', 'courseInterest'],
        });
        if (enquiry.length === 0) return response.success(res, messages.badRequest.noEnquiryClaimed);
        return response.success(res, messages.success.claimed, enquiry);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = fetchClaimedEnquiries;
