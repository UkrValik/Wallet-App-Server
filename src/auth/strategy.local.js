'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');
const User = require('../user/model.js');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}), (username, password, done) => {
    User.findByEmail(username).exec(async (err, results) => {
        if (err) return done(err);
        if (results.length === 0) {
            return done(null, false, { message: 'Incorrect email' });
        }
        if (!bcrypt.compareSync(password, results[0].password)) {
            return done(null, false, { message: 'Incorrect password' });
        }
        return done(null, results[0]);
    })
});
