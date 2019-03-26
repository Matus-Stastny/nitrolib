"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var React = _interopRequireWildcard(require("react"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _Theme = require("../../../records/Theme");

var _button = _interopRequireDefault(require("../../../styles/mixins/button"));

var Button = _styledComponents.default.button.withConfig({
  displayName: "Button",
  componentId: "sc-52mkgc-0"
})(["", ";display:flex;color:", ";cursor:pointer;font-weight:", ";font-size:", ";font-family:", ";text-decoration:none;background:", ";white-space:nowrap;", ";", ";", ";", ";", ";", ";", ";", ";", ";&:visited,&:active,&:link{color:", ";}&:hover{color:", ""], _button.default, function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return color === "primary" && "".concat(theme.orbit.paletteProductNormal) || color === "secondary" && "".concat(theme.orbit.paletteInkNormal) || theme.orbit.paletteWhite;
}, function (_ref2) {
  var theme = _ref2.theme,
      bold = _ref2.bold;
  return bold ? theme.orbit.fontWeightBold : theme.orbit.fontWeightMedium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.fontSizeTextSmall;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.fontFamily;
}, function (_ref5) {
  var theme = _ref5.theme,
      background = _ref5.background;
  return background ? background === "white" && theme.orbit.paletteWhite || background === "primary" && theme.orbit.backgroundButtonPrimary || background === "secondary" && theme.orbit.backgroundButtonSecondary : "transparent";
}, function (_ref6) {
  var transition = _ref6.transition;
  return transition && "transition: color 0.2s ease-in-out";
}, function (_ref7) {
  var padding = _ref7.padding;
  return padding && "padding: ".concat(padding);
}, function (_ref8) {
  var marginLeft = _ref8.marginLeft,
      theme = _ref8.theme;
  return marginLeft && "margin-".concat((0, _rtl.left)({
    theme: theme
  }), ": ").concat(marginLeft, "px");
}, function (_ref9) {
  var marginRight = _ref9.marginRight,
      theme = _ref9.theme;
  return marginRight && "margin-".concat((0, _rtl.right)({
    theme: theme
  }), ": ").concat(marginRight, "px");
}, function (_ref10) {
  var fontSize = _ref10.fontSize;
  return fontSize && "font-size: ".concat(fontSize);
}, function (_ref11) {
  var x = _ref11.x,
      y = _ref11.y,
      direction = _ref11.direction;
  return x && "justify-content: ".concat(direction === "column" ? y : x);
}, function (_ref12) {
  var x = _ref12.x,
      y = _ref12.y,
      direction = _ref12.direction;
  return y && "align-items: ".concat(direction === "column" ? x : y);
}, function (_ref13) {
  var direction = _ref13.direction;
  return direction && "flex-direction: ".concat(direction);
}, function (_ref14) {
  var disabled = _ref14.disabled;
  return disabled && "opacity: 0.5";
}, function (_ref15) {
  var theme = _ref15.theme,
      color = _ref15.color;
  return color === "primary" && "".concat(theme.orbit.paletteProductNormalActive) || color === "secondary" && "".concat(theme.orbit.paletteInkNormalActive) || theme.orbit.paletteWhiteActive;
}, function (_ref16) {
  var theme = _ref16.theme,
      color = _ref16.color;
  return color === "primary" || color === "secondary" ? theme.orbit.paletteProductNormalHover : theme.orbit.paletteWhiteHover;
});

Button.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = Button;
exports.default = _default;