"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.password = exports.departure = exports.iata = exports.yearAfter = exports.email = exports.required = void 0;

var _isEmail = _interopRequireDefault(require("validator/lib/isEmail"));

var _isAfter = _interopRequireDefault(require("date-fns/isAfter"));

var _addYears = _interopRequireDefault(require("date-fns/addYears"));

// eslint-disable-next-line no-extra-boolean-cast
var required = function required(val) {
  return Boolean(val) ? "" : "forms.this_field_must_be_filled";
};

exports.required = required;

var email = function email(val) {
  return (0, _isEmail.default)(val) ? "" : "forms.wrong_format_email";
};

exports.email = email;

var yearAfter = function yearAfter(_ref) {
  var _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset,
      _ref$now = _ref.now,
      now = _ref$now === void 0 ? new Date() : _ref$now;
  return function (val) {
    return (0, _isAfter.default)(val, (0, _addYears.default)(now, offset)) ? "" : "common.error";
  };
};

exports.yearAfter = yearAfter;

var iata = function iata(val) {
  return val.match(/^[A-Za-z]{3}$/) ? "" : "forms.enter_iata_code";
};

exports.iata = iata;

var departure = function departure(val) {
  var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return (0, _isAfter.default)(val, (0, _addYears.default)(now, -1)) ? "" : "common.error";
};

exports.departure = departure;
var PASSWORD_MIN_LENGTH = 8;
var PASSWORD_STRENGTH_LEVEL = 2;

var password = function password(value) {
  if (value.length < PASSWORD_MIN_LENGTH) return "account.password_too_short";

  if (window.zxcvbn) {
    var strength = window.zxcvbn(value);
    if (strength.score < PASSWORD_STRENGTH_LEVEL) return "account.password_too_simple";
  }

  return "";
};

exports.password = password;