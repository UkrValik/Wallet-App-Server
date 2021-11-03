'use strict';

const dynamoose = require('dynamoose');
const uuid = require('uuid');

const Schema = dynamoose.Schema;

class Transaction {

    constructor() {

        const transactionSchema = new Schema({
            id: String,
            description: String,
            category: {
                type: String,
                require: true,
            },
            value: {
                type: Number,
                required: true,
            },
            isIncome: {
                type: Boolean,
                required: true,
            },
            userId: {
                type: String,
                required: true,
            },
            walletId: {
                type: String,
                required: true,
            },
            date: {
                type: String,
                required: true,
            }
        });

        let modelName = 'transactions';
        if (process.env.NODE_ENV === 'development') {
            modelName += '-dev'
        }

        this.Transaction = dynamoose.model(modelName, transactionSchema);
    }

    create(transaction) {
        transaction.id = uuid.v1();
        return this.Transaction.create(transaction);
    }

    findById(id) {
        return this.Transaction.get(id);
    }

    findByUserId(userId) {
        return this.Transaction.scan('userId').eq(userId);
    }

    findByWalletId(walletId) {
        return this.Transaction.scan('walletId').eq(walletId);
    }

    updateById(newTransaction) {
        return this.Transaction.update(newTransaction);
    }
}

module.exports = new Transaction();
