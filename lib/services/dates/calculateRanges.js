"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getMaxMonth = exports.getMinMonth = exports.getMaxDate = exports.getMinDate = void 0;

var _range2 = _interopRequireDefault(require("ramda/src/range"));

var _getDaysInMonth = _interopRequireDefault(require("date-fns/getDaysInMonth"));

var _getDate = _interopRequireDefault(require("date-fns/getDate"));

var _getMonth = _interopRequireDefault(require("date-fns/getMonth"));

var _isSameYear = _interopRequireDefault(require("date-fns/isSameYear"));

var _isSameMonth = _interopRequireDefault(require("date-fns/isSameMonth"));

var _getYear = _interopRequireDefault(require("date-fns/getYear"));

// If `value` has same year and month with `min`
//  return date of min (minimum enabled date)
// else
//  1
var getMinDate = function getMinDate(min, value) {
  if ((0, _isSameYear.default)(min, value) && (0, _isSameMonth.default)(min, value)) {
    return (0, _getDate.default)(min);
  }

  return 1;
}; // If `value` has same year and month with `max`
//  return date of max (maximum enabled date)
// else
//  last day of month


exports.getMinDate = getMinDate;

var getMaxDate = function getMaxDate(max, value) {
  if ((0, _isSameYear.default)(max, value) && (0, _isSameMonth.default)(max, value)) {
    return (0, _getDate.default)(max);
  }

  return (0, _getDaysInMonth.default)(value);
}; // If `value` has same year with `min`
//  return month of min (minimum enabled month)
// else
//  0 (january)


exports.getMaxDate = getMaxDate;

var getMinMonth = function getMinMonth(min, value) {
  if ((0, _isSameYear.default)(min, value)) {
    return (0, _getMonth.default)(min);
  }

  return 0;
}; // If `value` has same year with `max`
//  return month of max (maximum enabled month)
// else
//  11 (december)


exports.getMinMonth = getMinMonth;

var getMaxMonth = function getMaxMonth(max, value) {
  if ((0, _isSameYear.default)(max, value)) {
    return (0, _getMonth.default)(max);
  }

  return 11;
}; // TODO: consider calculate isSameYear/Month once and pass to functions
// Return enabled ranges of dates/months/years to select by specified min and max dates


exports.getMaxMonth = getMaxMonth;

var calculateRanges = function calculateRanges(min, max, value) {
  return {
    dates: (0, _range2.default)(getMinDate(min, value), getMaxDate(max, value) + 1),
    // + 1 because last in R.range is excluded
    months: (0, _range2.default)(getMinMonth(min, value), getMaxMonth(max, value) + 1),
    years: (0, _range2.default)((0, _getYear.default)(min), (0, _getYear.default)(max) + 1)
  };
};

var _default = calculateRanges;
exports.default = _default;