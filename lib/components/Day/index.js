"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _LangInfo = require("../../records/LangInfo");

var _context = require("../../services/intl/context");

var _DateFnsLocale = _interopRequireDefault(require("../DateFnsLocale"));

var Day = function Day(props) {
  return React.createElement(_context.Consumer, null, function (intl) {
    return React.createElement(_DateFnsLocale.default, {
      getLocale: intl.getLocale
    }, function (locale) {
      return (0, _format.default)(props.date, props.format || (0, _LangInfo.fixDateFormat)(intl.language.dateFormat), {
        locale: locale
      });
    });
  });
};

Day.defaultProps = {
  format: ""
};
var _default = Day;
exports.default = _default;