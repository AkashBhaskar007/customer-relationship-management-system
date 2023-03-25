/* eslint-disable import/no-unresolved */
const { response } = require('../../utils');
const { messages } = require('../../app-config');
const { Form } = require('../../models');

const addEnquiry = async (req, res) => {
    try {
        const { clientName, clientEmail, courseInterest } = req.body;
        await Form.create({
            clientName,
            clientEmail,
            courseInterest,
        });
        return response.success(res, messages.success.formSubmitted);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = addEnquiry;
