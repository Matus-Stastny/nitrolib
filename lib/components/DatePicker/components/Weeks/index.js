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

var _index = _interopRequireDefault(require("../../../Day/index"));

var _Day = _interopRequireDefault(require("../../primitives/Day"));

var _getMonthDays = require("../../services/getMonthDays");

var Weeks = function Weeks(_ref) {
  var value = _ref.value;
  return React.createElement(_Stack.default, {
    align: "center",
    justify: "between",
    spacing: "extraTight",
    spaceAfter: "medium"
  }, (0, _getMonthDays.getWeekDays)(value).map(function (weekDay) {
    return React.createElement(_Day.default, {
      key: weekDay,
      disabled: true
    }, React.createElement(_Text.default, {
      size: "small"
    }, React.createElement(_index.default, {
      format: "iii",
      date: weekDay
    })));
  }));
};

var _default = Weeks;
exports.default = _default;