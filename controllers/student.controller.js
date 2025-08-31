const { Student, User } = require("../models/student.model");


//get loggedIn user data --->(READ)
const getLoggedInUser = async (req, res) => {
   try {
    const { name, email } = req.body;
    const uid = req.user.user_id;  //Firebase UID
      

    let user = await User.findOne({ firebaseUid: uid });
    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        name,
        email,
      });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get students list --->(READ)
const getStudents = async (req, res) => {
  try {
    const student = await Student.find({});
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get specific student (find by id) --->(READ)
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//post student details --->(CREATE)
const postStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//put student details --->(UPDATE)
const putStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body);
    if (!student) {
      return res
        .status(404)
        .json({ error: `Student not found for the requested id: ${id}` });
    }
    const updatedStudent = await Student.findById(id);
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//delete student details --->(DELETE)
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res
        .status(404)
        .json({ error: `Student not found for the requested id: ${id}` });
    }

    res.status(200).json({ Success: "student successfully deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getLoggedInUser,
  getStudents,
  getStudentById,
  putStudent,
  deleteStudent,
  postStudent,
};
