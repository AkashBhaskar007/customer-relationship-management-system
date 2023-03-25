require('module-alias/register');

const express = require('express');
require('dotenv').config();

const app = express();
// const logger = require('morgan');

const routes = require('./routes');

app.use(express.json());

app.use('/v1', routes);
app.listen(process.env.PORT, (err) => {
    if (!process.env.PORT) return console.log('No port specified');
    if (err) {
        console.log('Error', err);
    }
    console.log('Node.js is running at port: ', process.env.PORT);
});
module.exports = app;
