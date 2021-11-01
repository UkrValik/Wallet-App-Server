'use strict';

require('dotenv').config();
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const authRouter = require('./src/auth/controller.js');
const userRouter = require('./src/user/controller.js');
const localAuthStrategy = require('./src/auth/strategy.local.js');

const app = express();

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, localAuthStrategy));

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize());

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
    console.log('Running on port ' + process.env.PORT);
});
