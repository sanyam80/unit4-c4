const { Router } = require("express");
const express = require("express");

const Todo = require("../model/Todo.model.js");
const router = express.Router();
 router.post("/", async(req,res)=>{
     try{
     const todo = await Todo.create(req.body);
     return res.send(todo)
     }
     catch(err){
         return res.send(err.message)
     }
 })
 router.get("/:id", async(req,res)=>{
    try{
    const todo = await Todo.findById().lean.exec();
    return res.send(todo)
    }
    catch(err){
        return res.send(err.message)
    }
})
module.exports = Todo
 module.exports = Todo



