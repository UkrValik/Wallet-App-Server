'use strict';

const express = require('express');
const passport = require('passport');
const transactionService = require('./service.js');

const transactionRouter = express.Router();

transactionRouter.use(passport.authenticate('jwt'));

transactionRouter.post('/', transactionService.createTransaction);
transactionRouter.get('/', transactionService.getTransactionById);
transactionRouter.put('/', transactionService.updateTransactionById);
transactionRouter.delete('/', transactionService.deleteTransactionById);
transactionRouter.get('/user', transactionService.getUserTransactions);
transactionRouter.get('/wallet', transactionService.getWalletTransactions);

module.exports = transactionRouter;
