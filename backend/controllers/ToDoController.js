const TodoModel = require('../models/ToDoModel')

module.exports.getTodo = async (req,res) => {
    const toDo = await TodoModel.find()
    res.send(toDo)
}

module.exports.saveTodo = async (req,res) => {

    const { text } = req.body

   TodoModel.create({text})
   .then((data)=> {
    console.log("Added Successfully...")
    console.log(data)
    res.send(data)
   })
   
}