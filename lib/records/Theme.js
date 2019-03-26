"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBrandTheme = exports.themeDefault = void 0;

var _defaultTokens = _interopRequireDefault(require("@kiwicom/orbit-components/lib/defaultTokens"));

var _fromPlainObject = _interopRequireDefault(require("@kiwicom/orbit-components/lib/fromPlainObject"));

var themeDefault = _defaultTokens.default;
exports.themeDefault = themeDefault;

var getBrandTheme = function getBrandTheme(brand) {
  var rtl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    orbit: (0, _fromPlainObject.default)(brand.theme.palette),
    rtl: rtl
  };
};

exports.getBrandTheme = getBrandTheme;