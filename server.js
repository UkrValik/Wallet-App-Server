'use strict';

require('dotenv').config();
const express = require('express');

const app = express();

console.log(process.env.NODE_ENV);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/test', (req, res) => {
    res.send("Hello! It's a test feature");
});

app.get('/env', (req, res) => {
    res.json({environment: process.env.NODE_ENV});
});

app.listen(process.env.PORT, () => {
    console.log('Running on port ' + process.env.PORT);
});
