const BlogPost= require("../models/BlogPost");
const BlogLike= require("../models/BlogLike");
const BlogComment= require("../models/BlogComment");

//define route handler

exports.createPost =async(req,res)=>{
    try{
        //extract title and description from request body
        const {title,description}=req.body;
        //Create a new Todo obj and insert in DB
        const response= await BlogPost.create({title,description});

        // Send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        })
    }
    catch(err){
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

exports.createLike =async(req,res)=>{
    try{
        //extract title and description from request body
        const {like}=req.body;
        //Create a new Todo obj and insert in DB
        const response= await BlogLike.create({like});

        // Send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Liked Successfully"
        })
    }
    catch(err){
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
exports.createComment =async(req,res)=>{
    try{
       //fetch data from req body;

const{post,user,body}=req.body;

//create a comment object

const comment = new BlogComment({
post,user,body
})

//save the new comment into database

const savedComment = await comment.save();

const updatedPost= await BlogPost.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
                    .populate("comments")
                    .exec();
        // Send a json response with a success flag
        res.status(200).json({
            success:true,
            post: updatedPost,
            message:"Entry Created Successfully"
        })
    }
    catch(err){
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