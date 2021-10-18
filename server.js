'use strict';

require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const authRouter = require('./src/auth/controller.js');
const userRouter = require('./src/user/controller.js');

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(process.env.PORT, () => {
    console.log('Running on port ' + process.env.PORT);
});
