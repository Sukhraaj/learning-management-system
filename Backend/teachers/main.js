const express = require('express');
const teacher = express.Router();
const auth = require('./auth');

teacher.use('/auth',auth);

teacher.get('/', (req,res) => {
    res.send('This is teacher Home Page');
})

module.exports = teacher;