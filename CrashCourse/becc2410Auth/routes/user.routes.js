const express = require("express");
const userModel = require("../models/user.models");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;


const userRoutes = express.Router();

/// all the endpints/routes related to user

userRoutes.get("/list", async(req,res)=>{
    let data = await userModel.find();
    res.json({msg:"List of Users", data:data})
})

/// add a user 

userRoutes.post("/signup", async(req,res)=>{

    // from body , i get name, email and password, 123Venu
    // before storing it into db, i need to hash the password
    // how to hash ???
    // const myPlaintextPassword = 's0/\/\P4$$w0rD';
    // const someOtherPlaintextPassword = 'not_bacon';

    const {name, email, password } = req.body;
   /// i nedd to hash password
    // console.log("password",password)
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    // console.log(hashedPassword)
    // now i will enter this useer along with hashed password into DB
    await userModel.create({...req.body, password:hashedPassword})
    res.send("Signup Sucessfull")
})


userRoutes.post("/login", async(req,res)=>{
    // from body , i get name, email and original password, 123Venu
    // call that user from DB, comapare stored hashed password and password given during login
    // if both matches, then we say login sucess...
    const {name, email, password } = req.body;
    const user = await userModel.findOne({email});
    let storedHashedPassword = user.password;
    // now i need to compare 
    let ans = bcrypt.compareSync(password, storedHashedPassword ); // true
    console.log(ans)
    if(ans){
        // password matched
        // I generate a token here and hide some data  
        // { foo: 'bar' } is data to be hidden
        // shhhhh  ==> secret key
        var token = jwt.sign({ userId: user._id}, 'shhhhh');
       // console.log(token)
        res.json({msg:"Login sucessfull...", token})
    }else{
        res.send("Wrong Password")
    }
})
module.exports = userRoutes;