const express = require('express');

const todoSchema = require('../models/todoSchema')
const router = express.Router();


//posting a todo
router.post("/todos", async(req, res) => {
    const todo = req.body
    const todoData = new todoSchema(todo)
    try {
        await todoData.save()
        return res.status(201).send(todoData)
    } catch (error) {
        res.status(400).send(error)
    }
})
//fetching all todos
router.get("/todos", async (req, res) => {
    todoSchema.find({}).then((todos) => {
     return res.status(200).send(todos)   
    }).catch ((error) =>{
        res.status(400).send(error)
    })
})


router.get("/todos/:id", async (req, res) => {
    const id= req.params.id
    try {
        const todo = await todoSchema.findById(id)
        if (!todo) {
            return res.status(404).send({"error":"todo does not exists"})
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

router.patch("/todos/id", async (req, res) => {
    let id = req.params.id
    try {
        const todo = await todoSchema.findById(id)
        if (!todo) {
            return res.status(404).send({"error":"todo does not exists"})
        }
        todo.isCompleted=True
        await todo.Save()
        res.status(200)
    } catch (error) {
        res.status(400)
    }
})
module.exports = router;
