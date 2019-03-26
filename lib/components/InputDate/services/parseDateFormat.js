"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uniq2 = _interopRequireDefault(require("ramda/src/uniq"));

var _split2 = _interopRequireDefault(require("ramda/src/split"));

var _replace2 = _interopRequireDefault(require("ramda/src/replace"));

var _toUpper2 = _interopRequireDefault(require("ramda/src/toUpper"));

var _pipe2 = _interopRequireDefault(require("ramda/src/pipe"));

var parseDateFormat = (0, _pipe2.default)(_toUpper2.default, (0, _replace2.default)(/[^DMY]/g, ""), (0, _split2.default)(""), _uniq2.default);
var _default = parseDateFormat;
exports.default = _default;