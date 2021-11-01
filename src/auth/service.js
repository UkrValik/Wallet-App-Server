'use strict';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userService = require('../user/service.js');

const register = async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const savedUser = userService.createUser(req.body);
    res.json(savedUser);
}

const login = async (req, res) => {
    res.json({
        success: true,
        token: jwt.sign({ id: req.user.id }, process.env.JWT_SECRET),
    });
}

module.exports = {
    register,
    login,
};
