const mongoose= require("mongoose");
// const Comment= mongoose.model('Comment',)
const postSchema = new mongoose.Schema(

{
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'BlogLike',
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'BlogComment',
    }],
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    }


}
);

module.exports=mongoose.model("BlogPost",postSchema);