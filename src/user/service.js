'use strict';

const User = require('./model.js');

const createUser = (user) => {
    return User.create(user);
}

const findById = (userId) => {
    return User.findById(userId);
}

const findByEmail = (userEmail) => {
    return User.findByEmail(userEmail).exec();
}

const getUser = (req, res) => {
    req.user.password = undefined;
    res.json(req.user);
}

module.exports = {
    createUser,
    findById,
    findByEmail,
    getUser,
};
