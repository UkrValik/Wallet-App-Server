'use strict';

const User = require('../user/model.js');

const jwtAuthStrategy = async (jwtPayload, done) => {
    try {
        const user = await User.findById(jwtPayload.id);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect token' });
        }
    } catch (err) {
        done(err);
    }
}

module.exports = jwtAuthStrategy;
