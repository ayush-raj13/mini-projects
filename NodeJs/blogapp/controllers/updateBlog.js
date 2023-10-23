const BlogPost= require("../models/BlogPost");
const BlogLike= require("../models/BlogLike");
const BlogComment= require("../models/BlogComment");

exports.updatePost=async(req,res)=>{
try{
const{id}=req.params;
const{title,description}=req.body;
const blog = await BlogPost.findByIdAndUpdate(
    {_id:id},
    {title,description, updatedAt: Date.now()},)

    res.status(200).json({
        success:true,
        data:blog,
        message:"post updated successfully",
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

exports.updateLike=async(req,res)=>{
try{
const{id}=req.params;
const{like}=req.body;
const blogLike = await BlogLike.findByIdAndUpdate(
    {_id:id},
    {like, updatedAt: Date.now()},)

    res.status(200).json({
        success:true,
        data:blogLike,
        message:"like updated successfully",
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

exports.updateComment=async(req,res)=>{
try{
const{id}=req.params;
const{comment}=req.body;
const blogComment = await BlogComment.findByIdAndUpdate(
    {_id:id},
    {comment, updatedAt: Date.now()},)

    res.status(200).json({
        success:true,
        data:blogComment,
        message:"comment updated successfully",
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