'use strict'

const ENV = process.env.NODE_ENV || 'development';
const config = require('./env/' + ENV.toLowerCase());
console.log('ENV', ENV);
console.log('Token secret', config.token.secret);

module.exports = config;
