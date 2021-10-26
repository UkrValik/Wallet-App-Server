'use strict';

const express = require('express');
const passport = require('passport');
const authService = require('./service.js');

const authRouter = express.Router();

authRouter.post('/register', authService.register);
authRouter.post('/login', passport.authenticate('local'), authService.login);

module.exports = authRouter;
