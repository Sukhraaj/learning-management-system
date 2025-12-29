const mongoose = require('mongoose');


function connection(){
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log("error",err);
    })
}

module.exports = connection;
