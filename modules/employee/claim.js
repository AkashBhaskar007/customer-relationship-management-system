const jwt = require('jsonwebtoken');
const { response } = require('../../utils');
const { messages } = require('../../app-config');
const { Form } = require('../../models');

const getEnquiries = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = await jwt.verify(token, process.env.SECRET);
        const { formId } = req.params;
        const enquiry = await Form.findOne({
            where: {
                id: formId,
            },
        });
        if (!enquiry) return response.success(res, messages.badRequest.noEnquiry);

        await Form.update({
            claimedBy: decoded.id,
            isClaimed: true,
        }, {
            where: {
                id: formId,
            },
        });
        return response.success(res, messages.success.claimed);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = getEnquiries;
