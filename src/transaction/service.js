'use strict';

const Transaction = require('./model.js');

const createTransaction = async (req, res) => {
    try {
        const result = await Transaction.create(req.body);
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
}

const getUserTransactions = async (req, res) => {
    try {
        const result = await Transaction.findByUserId(req.user.id).exec();
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
}

const getTransactionById = async (req, res) => {
    try {
        const result = await Transaction.findById(req.body.id);
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
}

const updateTransactionById = async (req, res) => {
    try {
        const result = await Transaction.updateById(req.body);
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
}

const deleteTransactionById = (req, res) => {
    try {
        const result = Transaction.deleteById(req.body.id);
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
}

const getWalletTransactions = async (req, res) => {
    try {
        const result = await Transaction.findByWalletId(req.body.walletId).exec();
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
}

module.exports = {
    createTransaction,
    getUserTransactions,
    getTransactionById,
    updateTransactionById,
    deleteTransactionById,
    getWalletTransactions,
};
