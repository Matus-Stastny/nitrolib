"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Theme = require("../../../records/Theme");

var DatePickerWrapper = _styledComponents.default.div.withConfig({
  displayName: "DatePickerWrapper",
  componentId: "sc-15fwhd4-0"
})(["background:", ";z-index:2;width:100%;padding:", ";margin-top:10px;border-radius:4px;position:absolute;", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteWhite;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.spaceSmall;
}, function (_ref3) {
  var active = _ref3.active;
  return active && "box-shadow: 0 20px 60px 0 rgba(23, 27, 30, 0.4)";
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["width:400px;"])));

DatePickerWrapper.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = DatePickerWrapper;
exports.default = _default;