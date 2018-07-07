const router = require("express").Router()
const mongoose = require("mongoose")

const User = require("../models/user")
mongoose.connect("mongodb://localhost:27017/TodoDb")
const UserModel = mongoose.model("users",User)

router.post("/insert/:id", async (req,res)=>{
    const result = await UserModel.findOneAndUpdate(
        {_id: req.params.id},{ $push: {
             todos: {
                    desc: req.body.desc,
                    done: req.body.done
                }
            }
        }).exec();
   
    res.send(result);
})

router.post("/update/:id/:index", async (req,res)=>{
    var index= "todos."+ req.params.index;
    console.log(index);
    const result = 
    await UserModel.findOneAndUpdate(
        {_id: req.params.id},
         {$set: {
             [index]: req.body}}
             
        ).exec();
   
    res.send("ok");
})

router.post("/delete/:id/:todoId", async (req,res)=>{
    var index=  req.params.index;
    w
    const result = 
    await UserModel.findOneAndUpdate(
        {_id: req.params.id},
         {$pull: {
             "todos": {_id: req.params.todoId}}}
             
        ).exec();
   
    res.send("ok");
})



module.exports = router;