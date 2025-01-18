const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {name:String,
     email:{type:String, unique:true},
     password:String,
     age:Number
    }
);

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel;
// let array = new Array();  /// constructor approach 

// let arr2 = []; // literal approach 

// let obj = {};

// let obj1 = new Object()