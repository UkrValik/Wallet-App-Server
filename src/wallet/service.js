'use strict';

const Wallet = require('./model.js');

const createWallet = async (req, res) => {
    try {
        const result = await Wallet.create(req.body);
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
}

const getUserWallets = async (req, res) => {
    try {
        const wallets = await Wallet.findByUserId(req.user.id).exec();
        res.json({ success: true, wallets });
    } catch (err) {
        res.json({ success: false, err });
    }
}

const getWalletById = async (req, res) => {
    try {
        const wallet = await Wallet.findById(req.body.id);
        if (req.user.id === wallet.userId) {
            return res.json({ success: true, wallet });
        }
        return res.json({ success: false });
    } catch (err) {
        res.json({ success: false, err });
    }
}

const updateUserWallet = async (req, res) => {
    try {
        const result = await Wallet.updateById(req.body);
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
}

const deleteWallet = (req, res) => {
    try {
        const result = Wallet.deleteById(req.body.id);
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
}

module.exports = {
    createWallet,
    getUserWallets,
    getWalletById,
    updateUserWallet,
    deleteWallet,
};
