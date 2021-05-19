"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectiondb = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connectiondb = new _sequelize.default("collageDB", "yull", "powerd1", {
  host: "localhost",
  dialect: 'postgres'
});
exports.connectiondb = connectiondb;