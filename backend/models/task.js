const mongoose = require("mongoose")

const taskschema = mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        default:"pending",
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    }
})

module.exports=mongoose.model('usertasks',taskschema)