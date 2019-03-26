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

var StyledLink = _styledComponents.default.a.withConfig({
  displayName: "StyledLink",
  componentId: "sc-1n0rc99-0"
})(["text-decoration:none;cursor:pointer;&:link,&:visited{color:", ";i{color:", ";}&:hover{color:", ";i{color:", ";}}}", ""], function (_ref) {
  var active = _ref.active,
      theme = _ref.theme;
  return active ? theme.orbit.paletteProductNormal : theme.orbit.paletteInkNormal;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.paletteProductNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.paletteInkNormal;
}, _mediaQuery.default.tablet((0, _styledComponents.css)(["&:link,&:visited{color:", ";&:hover{color:", ";}}"], function (_ref5) {
  var active = _ref5.active,
      theme = _ref5.theme,
      inverted = _ref5.inverted;
  return inverted ? active && theme.orbit.paletteWhiteActive || theme.orbit.paletteWhite : active && theme.orbit.paletteProductNormal || theme.orbit.paletteInkNormal;
}, function (_ref6) {
  var theme = _ref6.theme,
      inverted = _ref6.inverted;
  return inverted ? theme.orbit.paletteWhiteHover : theme.orbit.paletteProductNormal;
})));

StyledLink.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = StyledLink;
exports.default = _default;