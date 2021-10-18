'use strict';

const bcrypt = require('bcryptjs');

const userService = require('../user/service.js');

const register = async (req, res) => {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const savedUser = userService.createUser(req.body);
    res.json(savedUser);
}

module.exports = {
    register,
};
