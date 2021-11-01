'use strict';

const User = require('./model.js');

const createUser = (user) => {
    return User.create(user);
}

const findById = (userId) => {
    return User.findById(userId);
}

const findByEmail = (userEmail) => {
    return User.findByEmail(userEmail);
}

module.exports = {
    createUser,
    findById,
    findByEmail,
};
