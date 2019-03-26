"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Theme = require("../../../records/Theme");

var Month = _styledComponents.default.div.withConfig({
  displayName: "Month",
  componentId: "sc-1helv69-0"
})(["color:", ";display:flex;font-size:", ";font-weight:", ";align-items:center;justify-content:center;"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.fontSizeTextSmall;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.fontWeightMedium;
});

Month.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = Month;
exports.default = _default;