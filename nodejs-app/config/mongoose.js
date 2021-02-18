'use strict'

const mongoose = require('mongoose');
const config = require('./index');

module.exports.init = initMongoose;

function initMongoose(app) {
    console.log('init mongoose');
    console.log('db uri ' + config.mongodb.uri)
    mongoose.connect(config.mongodb.uri, {
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    });

    console.log('connected to db');
}

//if the node proc ends, cleanup existing functions
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('SIGHUP', cleanup);

function cleanup() {
    mongoose.connection.close = function(){
            process.exit();
    }
}
