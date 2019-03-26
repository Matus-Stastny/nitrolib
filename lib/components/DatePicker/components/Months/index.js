"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _getYear = _interopRequireDefault(require("date-fns/getYear"));

var _context = require("../../../../services/intl/context");

var _Month = _interopRequireDefault(require("../../primitives/Month"));

var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var Months = function Months(_ref) {
  var month = _ref.month,
      viewing = _ref.viewing;
  return React.createElement(_context.Consumer, null, function (intl) {
    return React.createElement(_Month.default, {
      key: month,
      value: month
    }, intl.translate(MONTHS[month]), " ", (0, _getYear.default)(viewing));
  });
};

var _default = Months;
exports.default = _default;