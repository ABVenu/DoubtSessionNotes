const express = require("express");

const connectToDb = require("./config");
const userRouter = require("./routes/user.routes");
const blogsRouter = require("./routes/blogs.routes");
const loggerMw = require("./middleware/logger");
const app = express();
app.use(express.json());
app.use(loggerMw)
app.get("/", (req, res) => {
  res.send("This is test route");
});

app.use("/users", userRouter)
app.use("/blogs", blogsRouter)

app.listen(8080, async () => {
  await connectToDb()
  console.log("server started");
});
