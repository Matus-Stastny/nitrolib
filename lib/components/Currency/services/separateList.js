"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _splitEvery2 = _interopRequireDefault(require("ramda/src/splitEvery"));

function separateList(n, list) {
  return (0, _splitEvery2.default)(Math.ceil((list.length || 1) / n), list);
}

var _default = separateList;
exports.default = _default;