const express = require("express");
const verifyToken = require("../middleware/auth");
const router = express.Router();

const {
  getLoggedInUser,
  getStudents,
  getStudentById,
  putStudent,
  deleteStudent,
  postStudent,
} = require("../controllers/student.controller");


router.post("/login",verifyToken, getLoggedInUser);
router.get("/",verifyToken, getStudents);
router.get("/:id",verifyToken, getStudentById);
router.post("/",verifyToken, postStudent);
router.put("/:id",verifyToken, putStudent);
router.delete("/:id",verifyToken, deleteStudent);

module.exports = router;
