const express = require("express");
const BlogModel = require("../models/blogs.model");


const blogsRouter = express.Router();

blogsRouter.get("/", (req,res)=>{
    res.send("This is blog test route")
})

blogsRouter.post("/add", async (req,res)=>{
    /// req.body --> blog 
    try{
        let blog = await BlogModel.create(req.body);
        res.status(201).json({msg:"Blog Created", data:blog})
    }
    catch(err){
        res.send("Something went wrong in creating blogs")
    }
})

blogsRouter.get("/:id", async(req,res)=>{
    let blogId = req.params.id;
    let blog = await BlogModel.find({_id:blogId}).populate("user")
    res.json({blog})
})

module.exports = blogsRouter