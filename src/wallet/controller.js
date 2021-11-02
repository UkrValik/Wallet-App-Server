'use strict';

const express = require('express');
const passport = require('passport');
const walletService = require('./service.js');

const walletRouter = express.Router();

walletRouter.use(passport.authenticate('jwt'));

walletRouter.get('/', walletService.getWalletById);
walletRouter.post('/', walletService.createWallet);
walletRouter.put('/', walletService.updateUserWallet);
walletRouter.delete('/', walletService.deleteWallet);
walletRouter.get('/all', walletService.getUserWallets);

module.exports = walletRouter;
