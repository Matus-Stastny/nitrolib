"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbers = exports.email = void 0;

var email = function email(value) {
  return value.replace(/\s/g, "");
};

exports.email = email;

var numbers = function numbers(val) {
  return val.replace(/[^0-9]/g, "");
};

exports.numbers = numbers;