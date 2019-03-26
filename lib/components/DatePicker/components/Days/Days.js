"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _setDate = _interopRequireDefault(require("date-fns/setDate"));

var _isSameDay = _interopRequireDefault(require("date-fns/isSameDay"));

var _isWithinInterval = _interopRequireDefault(require("date-fns/isWithinInterval"));

var _getMonthDays = _interopRequireDefault(require("../../services/getMonthDays"));

var _Day = _interopRequireDefault(require("../../primitives/Day"));

var Days = function Days(_ref) {
  var value = _ref.value,
      viewing = _ref.viewing,
      min = _ref.min,
      max = _ref.max,
      onSelect = _ref.onSelect;
  return (0, _getMonthDays.default)({
    date: viewing
  }).map(function (week) {
    return React.createElement(_Stack.default, {
      justify: "between",
      spaceAfter: "small",
      spacing: "extraTight"
    }, week.map(function (day, i) {
      var date = (0, _setDate.default)(viewing, Number(day));
      var today = (0, _isSameDay.default)(date, new Date());
      var active = (0, _isSameDay.default)(date, value);
      var ok = (0, _isWithinInterval.default)(date, {
        start: min,
        end: max
      });
      return React.createElement(_Day.default, {
        key: i // eslint-disable-line react/no-array-index-key
        ,
        disabled: !ok || day === "",
        hidden: day === "",
        onClick: function onClick() {
          return onSelect(Number(day));
        },
        active: active
      }, React.createElement(_Text.default, {
        size: "large",
        type: today && !active && "info" || active && "white" || "primary",
        weight: "bold"
      }, day));
    }));
  });
};

var _default = Days;
exports.default = _default;