const express = require("express");
const router = express.Router();
const {
  getStudents,
  getStudentById,
  putStudent,
  deleteStudent,
  postStudent,
} = require("../controllers/student.controller");



router.get("/", getStudents);
router.get("/:id", getStudentById);
router.post("/", postStudent);
router.put("/:id", putStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
