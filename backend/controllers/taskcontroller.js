const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Task = require("../models/task")

exports.addtask = async(req,res)=>{

    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const user = req.user.id;

    const task = await Task.create({
        title,
        description,
        status,
        user
    })

    res.status(201).json({ message: "task added successfully" })
}

exports.gettask = async(req,res)=>{

    const tasks = await Task.find({ user: req.user.id });

    if (!tasks || tasks.length === 0){
        return res.json({ message: "no tasks" })
    }

    res.json({ tasks })
}
