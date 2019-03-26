"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _getYear = _interopRequireDefault(require("date-fns/getYear"));

var _Select = _interopRequireDefault(require("../Select"));

var Years = function Years(_ref) {
  var id = _ref.id,
      value = _ref.value,
      onChange = _ref.onChange,
      years = _ref.years;
  return React.createElement(_Select.default, {
    id: "".concat(id, "-year"),
    value: String((0, _getYear.default)(value)),
    onChange: onChange
  }, years.map(function (year) {
    return React.createElement("option", {
      key: year,
      value: year
    }, year);
  }));
};

var _default = Years;
exports.default = _default;