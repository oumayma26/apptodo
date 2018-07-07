const router = require("express").Router()
const mongoose = require("mongoose")

const User = require("../models/user")
mongoose.connect("mongodb://localhost:27017/TodoDb")
const UserModel = mongoose.model("users",User)

router.get("/all", async(req,res)=> {
    const result = await UserModel.find().exec();
    res.send(result);
})

router.post("/", (req,res)=>{
    UserModel(req.body).save(err => {res.send(err)});
})

router.get("/:id", async(req,res)=> {
    const result = await UserModel.findById(req.params.id).exec()
    res.send(result);
})
module.exports = router;