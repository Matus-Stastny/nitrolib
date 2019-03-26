"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSON_BOTH = exports.JSON_SEND = exports.JSON_GET = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var JSON_GET = {
  Accept: "application/json"
};
exports.JSON_GET = JSON_GET;
var JSON_SEND = {
  "Content-Type": "application/json"
};
exports.JSON_SEND = JSON_SEND;
var JSON_BOTH = (0, _objectSpread2.default)({}, JSON_GET, JSON_SEND);
exports.JSON_BOTH = JSON_BOTH;