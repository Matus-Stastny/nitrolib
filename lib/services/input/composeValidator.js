"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reverse2 = _interopRequireDefault(require("ramda/src/reverse"));

var _reduce2 = _interopRequireDefault(require("ramda/src/reduce"));

var _compose2 = _interopRequireDefault(require("ramda/src/compose"));

// eslint-disable-next-line fp/no-rest-parameters
var compose = function compose() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return function (value) {
    return (0, _compose2.default)((0, _reduce2.default)(function (acc, next) {
      return acc || next(value);
    }, ""), _reverse2.default)(validators);
  };
};

var _default = compose;
exports.default = _default;