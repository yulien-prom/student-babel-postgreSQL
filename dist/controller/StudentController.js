"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteStudentbyid = exports.saveStudentController = exports.getAllStudentsController = void 0;

var _StudentDatabase = require("../database/StudentDatabase");

const getAllStudentsController = async (req, res) => {
  const AllStudent = await (0, _StudentDatabase.getAllStudents)();

  try {
    if (AllStudent != "") {
      return res.json({
        status: 200,
        message: `The Student was found`,
        data: AllStudent
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: error
    });
  }
};

exports.getAllStudentsController = getAllStudentsController;

const saveStudentController = async (req, res) => {
  const {
    nameStudent,
    ageStudent
  } = req.body;

  try {
    const newStudent = await (0, _StudentDatabase.saveStudent)(nameStudent, ageStudent);
    console.log(newStudent);

    if (newStudent == "The Student was created") {
      return res.json({
        status: 201,
        message: newStudent
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: error
    });
  }
};

exports.saveStudentController = saveStudentController;

const deleteStudentbyid = async (req, res) => {
  const {
    idStudent
  } = req.body;

  try {
    const DeleteStudent = await (0, _StudentDatabase.DeleteStudentbyid)(idStudent);
    console.log(DeleteStudent);

    if (DeleteStudent == "Student eliminated") {
      return res.json({
        status: 200,
        message: DeleteStudent
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: error
    });
  }
};

exports.deleteStudentbyid = deleteStudentbyid;