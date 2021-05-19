"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteStudentbyid = exports.saveStudent = exports.getAllStudents = void 0;

var _express = require("express");

var _types = require("sequelize/types");

var _utils = require("sequelize/types/lib/utils");

var _connetionDB = require("../config/connetionDB");

const getAllStudents = async () => {
  try {
    const [results, metadata] = await _connetionDB.connectiondb.query("SELECT * From Student");
    console.log("results");
    return results;
  } catch (error) {
    console.log(error);
  }
};

exports.getAllStudents = getAllStudents;

const saveStudent = async (nameVariable, ageVariable) => {
  try {
    const [results, metadata] = await _connetionDB.connectiondb.query("INSERT INTO Student(nameStudent, ageStudent) values(:nameStudent, :ageStudent)", {
      replacements: {
        nameStudent: nameVariable,
        ageStudent: ageVariable
      }
    });
    return "The Student was created";
  } catch (error) {
    console.log(error);
  }
};

exports.saveStudent = saveStudent;

const DeleteStudentbyid = async idStudent => {
  try {
    const [results, metadata] = await _connetionDB.connectiondb.query("Delete from Student where idStudent = :idVariable", {
      replacements: {
        idVariable: idStudent
      }
    });
    return "Student eliminated";
  } catch (error) {}
};

exports.DeleteStudentbyid = DeleteStudentbyid;