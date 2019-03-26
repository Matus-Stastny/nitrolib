"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _libphonenumberJs = require("libphonenumber-js");

var PhoneNumber = function PhoneNumber(_ref) {
  var tel = _ref.tel;
  return (0, _libphonenumberJs.parsePhoneNumber)(tel).formatInternational();
};

var _default = PhoneNumber;
exports.default = _default;