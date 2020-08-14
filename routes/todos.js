const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const Todos = require('../models/Todos');

router.get('/todos', auth, async (req, res) => {
    try{
        const todos = await Todos.find({userId: req.user});
        console.log(todos)
        return res.status(200).json(todos)
    }catch(err){
        return res.status(500).json({
            error:"Server Error"
        })
    }
})

router.post('/todos', auth, async (req, res) => {
    try{
        const { title, complete } = req.body;
        const newTodo = new Todos({
            title,
            complete,
            userId:req.user
        })
        const todo = await newTodo.save();
        return res.status(200).json(todo)
    }catch(err){
        return res.status(500).json({
            error:"Server Error"
        })
    }
})

router.delete('/todos/:id', auth, async (req, res) => {
    try{
        const todo = await Todos.findOne({userId: req.user, _id: req.params.id});
        if(!todo){
            return res.status(404).json({
                error:"No Todo found"
            })
        }
        const deleteTodo = await Todos.findByIdAndDelete(req.params.id);
        return res.status(200).json(deleteTodo)
    }catch(err){
        return res.status(500).json({
            error:"Server Error"
        })
    }
})

router.patch('/todos/:id', auth, async (req, res) => {
    try{
        const todo = await Todos.findOne({userId: req.user, _id: req.params.id});
        if(!todo){
            return res.status(404).json({
                error:"No Todo found"
            })
        }
        if (req.body.title != null) {
        todo.title = req.body.title;
        }
        if (req.body.complete != null) {
        todo.complete = req.body.complete;
        }
        const updatedTodo = await Todo.save();
        return res.status(201).json(updatedTodo)
    }catch(err){
        return res.status(500).json({
            error:"Server Error"
        })
    }
})

module.exports = router;