const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();

const app = express();

//cors
app.use(cors());

//student routes
const studentRoutes = require("./routes/student.route");

// <--------------middleware configuration----------->

//json format        
app.use(express.json());

//form format
app.use(express.urlencoded({ extended: false }));


//studentRoutes api point
app.use("/api/students", studentRoutes);


//connecting to server
const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDb atlas successfully!");
    app.listen(PORT, () => console.log("server started running..."));
  })
  .catch((err) => console.log("connection failed due to", err));
