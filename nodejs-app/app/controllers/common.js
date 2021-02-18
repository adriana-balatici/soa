'use strict'

const jwt = require('jsonwebtoken');
const tokenSecret = require('../../config').token.secret;
const noAuthRoutes = ['/login', '/register'];

const respondWithJson = (prop) => {
    return (req, res, next) => {
        return res.json({ data: req[prop] });
    }
},

    authorizeToken = (req, res, next) => {
        if (noAuthRoutes.includes(req.originalUrl)) {
            return next();
        }
        var token = req.headers['authorization'];

        if (!token) {
            return next({ message: 'No token provided!', status: 401 })
        }

        token = token.substr(7);
        jwt.verify(token, tokenSecret, function (err, decoded) {
            if (err) {
                return next({ message: 'Invalid token!', status: 401 });
            }
        });
        return next();
    };

module.exports = {
    respondWithJson,
    authorizeToken
}
