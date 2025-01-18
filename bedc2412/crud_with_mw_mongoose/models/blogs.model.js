const mongoose = require("mongoose");;


const BlogSchema = new mongoose.Schema(
    {
        title:String,
        description:String,
        user:{type: mongoose.Schema.Types.ObjectId, ref:"user"}
    }
)


const BlogModel = mongoose.model("blog", BlogSchema);


module.exports = BlogModel;