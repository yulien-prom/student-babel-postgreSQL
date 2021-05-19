"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pg = require("pg");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connetionDB = require("../config/connetionDB");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Student = _connetionDB.connectiondb.define('Student', {
  idStudent: {
    type: _sequelize.default.INTEGER,
    primarykey: true
  },
  nameStudent: {
    type: _sequelize.default.TEXT
  },
  ageStudent: {
    type: _sequelize.default.INTEGER
  }
});

var _default = Student;
exports.default = _default;