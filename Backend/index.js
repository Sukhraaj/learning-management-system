const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connection = require('./database/connection');
const students = require('./database/Students');
const student = require('./students/main');
const teachers = require('./teachers/main');
const admin = require('./admin/main');

const app = express();

app.get('/', (req,res)=>{
    res.send("this is home page")
})

app.use('/students', student);
app.use('/teachers', teachers);
app.use('/admin', admin);

app.listen(9000, () => {
    console.log("this server is running at port 9000");
    connection();
})