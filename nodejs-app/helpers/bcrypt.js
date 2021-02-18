const bcrypt = require('bcrypt-nodejs');

const encryptPassword = (req, res, next) => {
    const { password } = req.body;

    const encryptedPassword = bcrypt.hashSync(password, null);
    req.body.password = encryptedPassword;

    return next();
},
    samePassword = (requestPassword, dbPassword) => {
        return bcrypt.compareSync(requestPassword, dbPassword);
    }

module.exports = {
    encryptPassword,
    samePassword
}
