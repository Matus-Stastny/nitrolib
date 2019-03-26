"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _Theme = require("../../../records/Theme");

var LanguageNameText = _styledComponents.default.span.withConfig({
  displayName: "LanguageNameText",
  componentId: "gbawin-0"
})(["margin-", ":10px;font-size:", ";font-weight:", ";letter-spacing:0.02em;white-space:nowrap;color:", ";&:hover{color:", ";}"],
/* sc-custom "left" */
_rtl.left, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.fontSizeTextSmall;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.fontWeightMedium;
}, function (_ref3) {
  var theme = _ref3.theme,
      inverted = _ref3.inverted;
  return inverted ? theme.orbit.paletteWhite : theme.orbit.paletteInkNormal;
}, function (_ref4) {
  var theme = _ref4.theme,
      inverted = _ref4.inverted;
  return inverted ? theme.orbit.paletteWhiteHover : theme.orbit.paletteProductNormalHover;
});

LanguageNameText.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = LanguageNameText;
exports.default = _default;