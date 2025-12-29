const express = require('express');
const auth = express.Router();

auth.get('/login', (req,res) => {
    res.send('This is admin Login page');
})

module.exports = auth;