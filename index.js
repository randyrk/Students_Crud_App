require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/student.route");
const cors = require('cors');



//cors
app.use(cors());

const app = express();

//middleware configuration

//json format          ---------------> middleware configuration
app.use(express.json());

//form format
app.use(express.urlencoded({ extended: false }));


//studentRoutes
app.use("/api/students", studentRoutes);


//connecting to server
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDb atlas successfully!");
    app.listen(3000, () => console.log("server started running..."));
  })
  .catch((err) => console.log("connection failed due to", err));
