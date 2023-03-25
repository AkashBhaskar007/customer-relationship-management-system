const bcrypt = require('bcrypt');
const { response } = require('../../utils');
const { messages } = require('../../app-config');
const { Employee } = require('../../models');

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        const emailExists = await Employee.findOne({
            where: {
                email,
            },
        });
        if (emailExists) return response.badRequestError(res, messages.badRequest.emailExists);
        await Employee.create({
            name,
            email,
            password: passwordHash,
        });
        return response.success(res, messages.success.registered);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = registerController;
