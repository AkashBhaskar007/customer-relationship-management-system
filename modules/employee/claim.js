const { response } = require('../../utils');
const { messages } = require('../../app-config');
const { Form } = require('../../models');

const getEnquiries = async (req, res) => {
    try {
        const { formId } = req.params;
        const enquiry = await Form.findOne({
            where: {
                id: formId,
            },
        });
        if (!enquiry) return response.success(res, messages.success.noEnquiry);

        await Form.update({
            claimedBy: req.user.id,
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
