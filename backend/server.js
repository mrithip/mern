const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const router = require("./routes/authroutes");
const taskadder = require("./routes/taskroutes");
const gettask  = require("./routes/taskroutes");
dotenv.config()
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

  app.use("/auth",router)

  app.use("/task",taskadder)

  app.use("/task",gettask)

app.listen(4000, () => {
  console.log("Backend Running in Port 4000");
});
