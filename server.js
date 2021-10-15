'use strict';

require('dotenv').config();
const express = require('express');

const app = express();

console.log(process.env.NODE_ENV);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/', (req, res) => {
    res.send("Hello! It's a test feature");
});

app.listen(process.env.PORT, () => {
    console.log('Running on port ' + process.env.PORT);
});
