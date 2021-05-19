"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _StudentController = require("../controller/StudentController");

const router = (0, _express.Router)(); //Localhost:4000/Student/getall

router.route("/getall").get(_StudentController.getAllStudentsController); //Localhost:4000/Student/save

router.route("/save").post(_StudentController.saveStudentController); //localhost:4000/Student/Delete

router.route("/Delete").delete(_StudentController.DeleteStudentbyid);
var _default = router;
exports.default = _default;