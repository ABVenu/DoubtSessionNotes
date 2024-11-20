const mongoose = require("mongoose");

const connectToDB = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/becc2410")
}

module.exports = connectToDB;