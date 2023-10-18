const express =require("express");
const router= express.Router();

//import controller
const {createPost,createLike,createComment}=require("../controllers/createBlog");
const {getPost,getPostById}=require("../controllers/getBlog");
const {updatePost,updateLike,updateComment}=require("../controllers/updateBlog");
const {deletePost,deleteLike,deleteComment}=require("../controllers/deleteBlog");

//defone API routes

router.post("/createPost",createPost);
router.post("/createLike",createLike);
router.post("/createComment",createComment);
router.get("/getPost",getPost);
router.get("/getPost/:id",getPostById);
router.put("/updatePost/:id",updatePost);
router.put("/updateLike/:id",updateLike);
router.put("/updateComment/:id",updateComment);
router.delete("/deletePost/:id",deletePost);
router.delete("/deleteLike/:id",deleteLike);
router.delete("/deleteComment/:id",deleteComment);

module.exports = router;