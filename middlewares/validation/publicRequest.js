/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
const { query, param, body } = require('express-validator');

module.exports = (controller = '') => {
    switch (controller) {
    case 'enquire': {
        return [
            body('clientName')
                .not()
                .isEmpty()
                .trim()
                .escape()
                .withMessage('Name cannot be left blank'),
            body('clientEmail')
                .trim()
                .normalizeEmail()
                .not()
                .isEmpty()
                .withMessage('Email cannot be left blank')
                .bail()
                .isEmail()
                .withMessage('Email is not valid'),
            body('courseInterest')
                .not()
                .isEmpty()
                .trim()
                .escape()
                .withMessage('Course cannot be left blank'),
        ];
    }
    }
};
