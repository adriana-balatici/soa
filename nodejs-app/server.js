'use strict'

const express = require('express');
const app = express();
const port = require('./config').PORT;

require('./config/express').init(app);
require('./config/routes').init(app);
require('./config/mongoose').init(app);

//generic middleware for errors
app.use(function (err, req, res, next) {
    let { status, message } = err;

    console.log(err)
    if (err.message && err.message.code === 11000) {
        const { keyValue } = err.message;
        const propName = Object.keys(keyValue)[0];

        message = `Duplicate ${propName}: ${keyValue[propName]}`;
        status = 412;
    }

    return res.status(status || 400).json({
        message: message || 'Default error message'
    })
});

//start server
app.listen(port, () => {
    console.log("app server started on port " + port);
});
