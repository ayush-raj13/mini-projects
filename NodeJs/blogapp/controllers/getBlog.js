const BlogPost = require("../models/BlogPost");
//define route handle
exports.getPost = async (req, res) => {
    try {
        //fetch all data from data base
        const blogs = await BlogPost.find({});
        //response
        res.status(200).json({
            success: true,
            data: blogs,
            message: "Entire blog Is fetched",
        });

    }
    catch (err) {
        console.error(err);
        console.log(err);

        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: "Server Error",
            });
    }
}

exports.getPostById = async (req, res) => {
    try {
        //extract blog items basis on id
        const id = req.params.id;
        const blog = await BlogPost.findById({ _id: id });

        //data for fiven id not found
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "No Data Found with given id",
            })
        }

        //data found
        res.status(200).json({
            success: true,
            data: blog, 
            message: `blog ${id} successfully fetched`,
        })
    }
    catch (err) {
        console.error(err);
        console.log(err);

        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: "Server Error",
            });
    
    }
}