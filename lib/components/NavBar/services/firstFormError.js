"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var _prop2 = _interopRequireDefault(require("ramda/src/prop"));

var _map2 = _interopRequireDefault(require("ramda/src/map"));

var _filter2 = _interopRequireDefault(require("ramda/src/filter"));

var _head2 = _interopRequireDefault(require("ramda/src/head"));

var _compose2 = _interopRequireDefault(require("ramda/src/compose"));

var firstFormError = (0, _compose2.default)(_head2.default, (0, _filter2.default)(Boolean), (0, _map2.default)((0, _prop2.default)("error")), _values2.default);
var _default = firstFormError;
exports.default = _default;