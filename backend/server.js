const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const router = require("./routes/authroutes");
dotenv.config()
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongoodb connect successully"))
  .catch((err) => console.log(err));

  app.use("/auth",router)

app.listen(4000, () => {
  console.log("Backen Running in Port 4000");
});