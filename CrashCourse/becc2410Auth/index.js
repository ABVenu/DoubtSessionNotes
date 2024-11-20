const express = require("express");

const connectToDB = require("./config");
const userRoutes = require("./routes/user.routes");
const todoRoutes = require("./routes/todo.routes");
const app = express();
app.use(express.json())

app.use("/users",userRoutes)
app.use("/todos", todoRoutes)

app.listen(8080, ()=>{
    try{
        connectToDB()
        console.log("connected to db")
    }catch(err){
        console.log("failing to connect db")
    }
    console.log("Server started")
})