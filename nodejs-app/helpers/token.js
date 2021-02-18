'use strict'

const jwt = require('jsonwebtoken');
const tokenSecret = require('../config/index').token.secret;

const generateToken = (userId) => {
    return jwt.sign({id: userId}, tokenSecret, {
        expiresIn: 86400 // one day
    })
}

module.exports = {
    generateToken
};
