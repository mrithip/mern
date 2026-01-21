const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Task = require("../models/task")

exports.addtask = async(req,res)=>{

    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const user = req.body.id;

    const task = await Task.create({
        title,
        description,
        status,
        user
    })

    res.status(201).send({msg:"task added successfully"})
}
