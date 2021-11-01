'use strict';

const express = require('express');
const passport = require('passport');
const userService = require('./service.js');

const userRouter = express.Router();

userRouter.get('/', passport.authenticate('jwt'), userService.getUser);

module.exports = userRouter;
