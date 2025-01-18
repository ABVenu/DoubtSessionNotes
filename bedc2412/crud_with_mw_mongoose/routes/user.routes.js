const express = require("express");
const UserModel = require("../models/user.models");
const BlogModel = require("../models/blogs.model");
const validationMW = require("../middleware/validation");


const userRouter = express.Router();

userRouter.get("/", (req,res)=>{
    res.send("This is user test route")
})


userRouter.post("/signup", validationMW ,async (req,res)=>{
    /// req.body ---> user data coming from client 
    /// logic???

    /// check the email, if user present , send user Alreday registred
    /// if not, put the user in the database and send signup sucess
    const {email} = req.body
    //console.log(email)
    // find teh user's email 
    let user = await UserModel.findOne({email})
    console.log("user", user)

    if(user==null){
        /// user not found in the db
        /// put the user in the db 
        await UserModel.create(req.body);
        res.send("Signup Sucess...")
    }else{
        /// user found in the db
        res.send("User Already Registered, please login")
    }
    // res.send("hi")
})


userRouter.get("/blogs/:id", async(req,res)=>{
    let blogs = await BlogModel.find({user: req.params.id},{user:0, __v:0});
    res.json({blogs})
})

module.exports = userRouter