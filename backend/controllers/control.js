const Todo = require('./../models/todo');

exports.addTodo = async(req,res) => {
    try {
        const {title,description} = req.body;
        const todo = Todo.create({title,description})
        if(todo) {
            res.status(200).json({
                success:true,
                message:'Todo add successfully'
            })
        }
        else {
            res.status(500).json({
                success:false,
                message:'Todo add unsuccessfully'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}