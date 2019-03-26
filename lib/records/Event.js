"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

// eslint-disable-next-line import/prefer-default-export
var make = function make(event, props) {
  var now = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
  return (0, _objectSpread2.default)({}, event, {
    timestamp: now,
    props: props
  });
};

exports.make = make;