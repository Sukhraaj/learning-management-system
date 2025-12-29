const express = require('express');
const auth = express.Router();

auth.get('/login', (req,res) => {
    res.send('This is teacher Login page');
})

module.exports = auth;