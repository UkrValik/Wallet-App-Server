'use strict';

const bcrypt = require('bcrypt');

const userService = require('../user/service.js');

const register = async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const savedUser = userService.createUser(req.body);
    res.json(savedUser);
}

module.exports = {
    register,
};
