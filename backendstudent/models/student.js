const mongoose = require("mongoose")

const studentdetails = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    isactive:{
        type:Boolean,
        required:true,
    }
})

module.exports = mongoose.model('studentdetail',studentdetails)