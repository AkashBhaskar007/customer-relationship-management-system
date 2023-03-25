const { response } = require('../../utils');
const { messages } = require('../../app-config');
const { Form } = require('../../models');

const claimEnquiry = async (req, res) => {
    try {
        const enquiries = await Form.findAndCountAll({
            where: {
                isClaimed: false,
            },
            attributes: ['id', 'clientName', 'clientEmail', 'courseInterest'],
        });
        if (enquiries.count === 0) return response.success(res, messages.success.noEnquiry);
        return response.success(res, messages.success.listFetched, enquiries);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = claimEnquiry;
