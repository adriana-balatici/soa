const User = require('../models/users');
const samePassword = require('../../helpers/bcrypt').samePassword;
const roundDouble = require('../../helpers/round').roundDouble;

const saveUser = (req, res, next) => {
    const { firstname, lastname, email, password } = req.body;
    const user = new User({
        firstname,
        lastname,
        email,
        password
    });

    user.save(user, function (err, response) {
        if (err) {
            return next({ message: err });
        }

        return res.json({ data: response });
    })
},
    getUser = (req, res, next) => {

        User
            .findById(req.params.id)
            .lean()
            .exec(function (err, response) {
                if (err) {
                    return next(err);
                }

                req.user = response;
                next();
            })
    },
    getUsers = (req, res, next) => {
        User.find(function (err, response) {
            if (err) {
                return next(err);
            }

            return res.json({ data: response });
        })
    }

module.exports = {
    saveUser,
    getUser,
    getUsers,
};
