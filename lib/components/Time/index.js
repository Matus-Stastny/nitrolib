"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _context = require("../../services/intl/context");

var _LangInfo = require("../../records/LangInfo");

var Time = function Time(_ref) {
  var time = _ref.time;
  return React.createElement(_context.Consumer, null, function (intl) {
    return (0, _format.default)(time, (0, _LangInfo.fixTimeFormat)(intl.language.timeFormat));
  });
};

var _default = Time;
exports.default = _default;