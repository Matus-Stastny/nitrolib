"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _getMonth = _interopRequireDefault(require("date-fns/getMonth"));

var _Select = _interopRequireDefault(require("../Select"));

var _context = require("../../services/intl/context");

var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var Months = function Months(_ref) {
  var id = _ref.id,
      value = _ref.value,
      onChange = _ref.onChange,
      months = _ref.months;
  return React.createElement(_context.Consumer, null, function (_ref2) {
    var translate = _ref2.translate;
    return React.createElement(_Select.default, {
      id: "".concat(id, "-month"),
      value: String((0, _getMonth.default)(value)),
      onChange: onChange
    }, months.map(function (month) {
      return React.createElement("option", {
        key: month,
        value: month
      }, translate(MONTHS[month]));
    }));
  });
};

var _default = Months;
exports.default = _default;