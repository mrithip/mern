const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/user")

exports.register = async(req,res)=>{
    const {name,email,password,role} = req.body;
    const exists = await User.findOne({email});
    if(exists){
        return res.status(400).json({message : "email already exists"})
    }
    const hasspass = bcrypt.hash(password,10);
    const user = await User.create({
        name,
        email,
        password:hasspass,
        role,
    })
    res.status(201 ).json({message:"user created successfully"})
}