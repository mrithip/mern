const express = require("express")
const app = express()
const dotenv = require("dotenv") 
const mongoose = require("mongoose")
dotenv.config()

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log('monngodb connected successfully'))
.catch((err) => console.log(err))

app.listen(4000,()=>{
    console.log("backend is running in port 4000");
});