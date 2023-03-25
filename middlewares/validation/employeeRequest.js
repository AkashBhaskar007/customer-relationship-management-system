/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
const { query, param, body } = require('express-validator');

module.exports = (controller = '') => {
    switch (controller) {
    case 'register': {
        return [
            body('name')
                .not()
                .isEmpty()
                .trim()
                .escape()
                .withMessage('Name cannot be left blank'),
            body('email')
                .trim()
                .normalizeEmail()
                .not()
                .isEmpty()
                .withMessage('Email cannot be left blank')
                .bail()
                .isEmail()
                .withMessage('Email is not valid'),
            body('password')
                .not()
                .isEmpty()
                .trim()
                .escape()
                .withMessage('Password cannot be left blank'),
        ];
    }
    case 'login': {
        return [
            body('email')
                .trim()
                .normalizeEmail()
                .not()
                .isEmpty()
                .withMessage('Email cannot be left blank')
                .bail()
                .isEmail()
                .withMessage('Email is not valid'),
            body('password')
                .not()
                .isEmpty()
                .trim()
                .escape()
                .withMessage('Password cannot be left blank'),
        ];
    }
    case 'claim-enquiry': {
        return [
            param('formId')
                .exists()
                .isUUID()
                .withMessage('Form should be UUID')
                .trim()
                .withMessage('Invalid form ID'),
        ];
    }
    }
};
