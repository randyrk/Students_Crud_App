const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true
    },
    age: {
      type: Number,
      required: true,
      default: 0,
    },
    gender: {
      type: String,
      required: [true, "Please enter your gender"],
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = mongoose.Schema(
  {
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
const User = mongoose.model("User", userSchema);

module.exports = { Student, User };
