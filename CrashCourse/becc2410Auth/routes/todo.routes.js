const express = require("express");
const todoModel = require("../models/todo.models");
const authMiddleware = require("../middlewares/auth");


const todoRoutes = express.Router();

todoRoutes.use(authMiddleware)

// this route is available only for logged in users, 
todoRoutes.get("/", async(req,res)=>{
   // console.log("in todo route", req.userId)
    let data = await todoModel.find({user:req.userId});
    res.json({msg:"Todo List",data})
})

todoRoutes.post("/", async(req,res)=>{
    // console.log("in todo route", req.userId)
    // from body i ma getting title and status
     let data = await todoModel.create({...req.body, user:req.userId})
     res.json({msg:"Todo Created",data})
 })




module.exports = todoRoutes;