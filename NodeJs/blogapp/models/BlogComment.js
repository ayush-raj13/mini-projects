const mongoose= require("mongoose");
const commentSchema = new mongoose.Schema(

{
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BlogPost",
    },
    user:{
        type:String,
        required:true,
    },
   body:{
        type:String,
        required:true,
    },
}
);

module.exports=mongoose.model("BlogComment",commentSchema);