'use strict';

const dynamoose = require('dynamoose');
const uuid = require('uuid');
const Transaction = require('../transaction/model.js');

const Schema = dynamoose.Schema;

class Wallet {

    constructor() {

        const walletSchema = new Schema({
            id: String,
            name: {
                type: String,
                required: true,
            },
            value: {
                type: Number,
                required: true,
            },
            type: {
                type: String,
                required: true,
            },
            userId: {
                type: String,
                required: true,
            },
            visible: {
                type: Boolean,
                required: true,
            },
        });

        let modelName = 'wallets';
        if (process.env.NODE_ENV === 'development') {
            modelName += '-dev'
        }

        this.Wallet = dynamoose.model(modelName, walletSchema);
    }

    create(wallet) {
        wallet.id = uuid.v1();
        return this.Wallet.create(wallet);
    }

    findById(id) {
        return this.Wallet.get(id);
    }

    findByUserId(userId) {
        return this.Wallet.scan('userId').eq(userId);
    }

    updateById(newWallet) {
        return this.Wallet.update(newWallet);
    }

    deleteById(id) {
        Transaction.deleteByWalletId(id);
        return this.Wallet.delete(id);
    }
}

module.exports = new Wallet();
