const BlogPost= require("../models/BlogPost");
const BlogLike= require("../models/BlogLike");
const BlogComment= require("../models/BlogComment");

exports.deletePost=async(req,res)=>{
try{
const{id}=req.params;
const{title,description}=req.body;
 await BlogPost.findByIdAndDelete(id);

    res.json({
        success:true,
        message:"Post Deleted",
    })
}
catch(err)
{
    console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
}

}

exports.deleteLike=async(req,res)=>{
try{
const{id}=req.params;
const{like}=req.body;
 await BlogLike.findByIdAndDelete(id);

    res.json({
        success:true,
        message:"Like Deleted",
    })
}
catch(err)
{
    console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
}

}

exports.deleteComment=async(req,res)=>{
try{
const{id}=req.params;
const{comment}=req.body;
 await BlogComment.findByIdAndDelete(id);

    res.json({
        success:true,
        message:"Comment Deleted",
    })
}
catch(err)
{
    console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
}

}