'use strict';

const argon2 = require('argon2');

const userService = require('../user/service.js');

const register = async (req, res) => {
    req.body.password = argon2.hash(req.body.password);
    const savedUser = userService.createUser(req.body);
    res.json(savedUser);
}

module.exports = {
    register,
};
