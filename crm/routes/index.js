const express = require('express');

const router = express.Router();
const employeeRouter = require('./employee');
const publicRouter = require('./public');

router.use('/employee', employeeRouter);
router.use('/public', publicRouter);

module.exports = router;
