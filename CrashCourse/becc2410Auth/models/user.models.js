const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
      name:String,
      email:{type:String, required: true, unique:true},
      password:{type:String, required:true}
    }
)

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
