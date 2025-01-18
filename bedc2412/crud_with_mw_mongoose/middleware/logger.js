const fs = require("fs")

const loggerMw = (req,res,next)=>{
    let data = `Method: ${req.method} | Url: ${req.url} | Date: ${Date.now()} \n`;
    fs.appendFileSync("./logs.txt", data);
    // after appending, let mw allows next Backend Logic
    next()
}

module.exports = loggerMw;