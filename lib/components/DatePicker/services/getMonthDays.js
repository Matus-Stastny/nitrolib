"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getWeekDays = void 0;

var _endOfMonth = _interopRequireDefault(require("date-fns/endOfMonth"));

var _isSameMonth = _interopRequireDefault(require("date-fns/isSameMonth"));

var _startOfMonth = _interopRequireDefault(require("date-fns/startOfMonth"));

var _eachWeekOfInterval = _interopRequireDefault(require("date-fns/eachWeekOfInterval"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _getYear = _interopRequireDefault(require("date-fns/getYear"));

var _getMonth = _interopRequireDefault(require("date-fns/getMonth"));

var _eachDayOfInterval = _interopRequireDefault(require("date-fns/eachDayOfInterval"));

var _endOfISOWeek = _interopRequireDefault(require("date-fns/endOfISOWeek"));

var _startOfISOWeek = _interopRequireDefault(require("date-fns/startOfISOWeek"));

var getWeekDays = function getWeekDays(date) {
  return (0, _eachDayOfInterval.default)({
    start: (0, _startOfISOWeek.default)(date),
    end: (0, _endOfISOWeek.default)(date)
  });
};

exports.getWeekDays = getWeekDays;

var getMonthDays = function getMonthDays(_ref) {
  var date = _ref.date,
      _ref$weekStart = _ref.weekStart,
      weekStart = _ref$weekStart === void 0 ? 1 : _ref$weekStart;
  var getDate = new Date((0, _getYear.default)(date), (0, _getMonth.default)(date));
  var weeks = (0, _eachWeekOfInterval.default)({
    start: (0, _startOfMonth.default)(getDate),
    end: (0, _endOfMonth.default)(getDate)
  }, {
    weekStartsOn: weekStart
  });
  var weekDays = weeks.map(function (weekDay) {
    return getWeekDays(weekDay);
  });
  return weekDays.map(function (days) {
    return days.map(function (day) {
      return (0, _isSameMonth.default)(date, day) ? (0, _format.default)(day, "d") : "";
    });
  });
};

var _default = getMonthDays;
exports.default = _default;