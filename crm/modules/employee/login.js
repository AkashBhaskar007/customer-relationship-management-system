const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { response } = require('../../utils');
const { messages } = require('../../app-config');
const { Employee } = require('../../models');

const employeeLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Employee.findOne({
            where: {
                email,
            },
        });
        if (!user) return response.badRequestError(res, messages.badRequest.noUser);
        const passwordCheck = await bcrypt.compare(password, user.password);
        console.log(passwordCheck);
        if (passwordCheck) {
            const token = jwt.sign({
                id: user.id,
                name: user.name,
                email: user.email,
            }, process.env.SECRET);
            console.log(token);
            return response.success(res, messages.success.login, { token });
        }
        return response.success(res, messages.badRequest.incorrectPassword);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = employeeLogin;
