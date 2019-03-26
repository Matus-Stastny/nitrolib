"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _getDate = _interopRequireDefault(require("date-fns/getDate"));

var _Select = _interopRequireDefault(require("../Select"));

var Dates = function Dates(_ref) {
  var id = _ref.id,
      value = _ref.value,
      onChange = _ref.onChange,
      dates = _ref.dates;
  return React.createElement(_Select.default, {
    id: "".concat(id, "-date"),
    value: String((0, _getDate.default)(value)),
    onChange: onChange
  }, dates.map(function (date) {
    return React.createElement("option", {
      key: date,
      value: date
    }, date);
  }));
};

var _default = Dates;
exports.default = _default;