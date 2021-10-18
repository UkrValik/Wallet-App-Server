'use strict';

const express = require('express');
const authService = require('./service.js');

const authRouter = express.Router();

authRouter.post('/register', authService.register);

module.exports = authRouter;
