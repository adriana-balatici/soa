'use strict'

const express = require('express');
const encryptPassword = require('../../helpers/bcrypt').encryptPassword;
const router = express.Router();
const userController = require('../controllers/users');
const commonController = require('../controllers/common');

router.post('/register', encryptPassword, userController.saveUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser, commonController.respondWithJson('user'));

module.exports = router;
