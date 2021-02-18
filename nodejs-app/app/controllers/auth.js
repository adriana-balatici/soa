'use strict'

const samePassword = require('../../helpers/bcrypt').samePassword;
const tokenGenerator = require('../../helpers/token');
const User = require('../models/users');

const login = (req, res, next) => {
    const { email, password } = req.body;

    User.find({ email: email }, function (err, response) {
        if (err) {
            return next({ message: err });
        }
        if(response.length === 0){
            return next({message: "Inexistent user with that email!", status: 404});
        }

        let user = response[0];
        if (!samePassword(password, user.password)) {
             return next({ message: "Incorrect password!", status:  404});
        }

        const token = tokenGenerator.generateToken(user._id);        
        return res.json({ data: user, token: token });
    });
}

module.exports = {
    login
};
