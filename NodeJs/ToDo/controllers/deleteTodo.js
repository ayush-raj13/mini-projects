const Todo= require("../models/Todo");

exports.deleteTodo=async(req,res)=>{
try{
const{id}=req.params;
const{title,description}=req.body;
 await Todo.findByIdAndDelete(id);

    res.json({
        success:true,
        message:"Todo Deleted",
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