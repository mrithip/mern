const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/user")

exports.register = async(req,res)=>{
    const {name,email,password} = req.body;

    const exists = await User.findOne({email});

    if (exists){
        return res.status(400).json({ message: "email already exists" });
    }
    const hashpass = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password:hashpass
    })

    res.status(201).json({ message: "user created successfully" })
}

exports.login = async(req,res)=>{
    const {email,password} = req.body;

    const existuser = await User.findOne({email});

    if (!existuser){
        return res.status(400).json({ message: "email does not exist" });
    }
    const ismatch = await bcrypt.compare(password, existuser.password);

    if (!ismatch){
        return res.status(400).json({ message: "wrong password" });
    }

    const token = jwt.sign(
        {id: existuser._id},
        process.env.JWT,
        {expiresIn: '1d'}
    )

    res.json({ token });
}
