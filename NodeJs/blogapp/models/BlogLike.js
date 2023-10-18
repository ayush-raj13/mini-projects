const mongoose = require("mongoose");
const likeSchema = new mongoose.Schema(

    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BlogPost"
        },
        user: {
            type: String,
            required: true,
        },
        like: {
            type: Boolean,
            required: true,
        },
    }
);

module.exports = mongoose.model("BlogLike", likeSchema);