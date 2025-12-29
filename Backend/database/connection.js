const mongoose = require('mongoose');


function connection(){
    mongoose.connect('mongodb://localhost:27017/lms2').then(() => {
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log("error",err);
    })
}

module.exports = connection;
