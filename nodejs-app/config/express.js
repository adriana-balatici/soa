'use strict'

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const commonController = require('../app/controllers/common');
module.exports.init = initExpress;

function initExpress(app) {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use('*', commonController.authorizeToken);
}
