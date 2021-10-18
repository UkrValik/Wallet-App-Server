'use strict';

const User = require('./model.js');

const createUser = (user) => {
    return User.create(user);
}

module.exports = {
    createUser,
};
