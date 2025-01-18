const mongoose = require("mongoose");

const connectToDb = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bedc2412");
        console.log("connected to db");
      } catch (err) {
        console.log("error in connecting db");
        console.log(err);
      }
}

module.exports = connectToDb;