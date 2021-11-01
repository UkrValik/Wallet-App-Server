'use strict';

require('dotenv').config();
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const authRouter = require('./src/auth/controller.js');
const userRouter = require('./src/user/controller.js');
const localAuthStrategy = require('./src/auth/strategy.local.js');
const jwtAuthStrategy = require('./src/auth/strategy.jwt.js');

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

passport.use('jwt', new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}, jwtAuthStrategy));

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
