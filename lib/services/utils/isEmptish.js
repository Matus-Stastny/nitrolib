"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _filter2 = _interopRequireDefault(require("ramda/src/filter"));

var _isEmpty2 = _interopRequireDefault(require("ramda/src/isEmpty"));

var _compose2 = _interopRequireDefault(require("ramda/src/compose"));

var isEmptish = (0, _compose2.default)(_isEmpty2.default, (0, _filter2.default)(Boolean));
var _default = isEmptish;
exports.default = _default;