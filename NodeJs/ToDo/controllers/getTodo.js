const Todo = require("../models/Todo");
//define route handle
exports.getTodo = async (req, res) => {
    try {
        //fetch all data from data base
        const todos = await Todo.find({});
        //response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo Is fetched",
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

exports.getTodoById = async (req, res) => {
    try {
        //extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        //data for fiven id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data Found with given id",
            })
        }

        //data found
        res.status(200).json({
            success: true,
            data: todo, 
            message: `Todo ${id} successfully fetched`,
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