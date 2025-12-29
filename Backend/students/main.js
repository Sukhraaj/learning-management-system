const express = require('express');
const auth = require('./auth');

const student = express.Router();


student.use('/auth', auth);
student.get('/', (req,res) => {
    res.send('This is student Home Page');
})

module.exports = student;