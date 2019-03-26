"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Theme = require("../../../../../records/Theme");

var ItemWrapper = _styledComponents.default.div.withConfig({
  displayName: "ItemWrapper",
  componentId: "sc-1dlyiwv-0"
})(["display:flex;", ";", ";", ";background:", ";box-shadow:inset 0 -1px ", ";cursor:pointer;font-weight:", ";&:hover{background:", ";}"], function (_ref) {
  var x = _ref.x,
      y = _ref.y,
      direction = _ref.direction;
  return x && "justify-content: ".concat(direction === "column" ? y : x);
}, function (_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      direction = _ref2.direction;
  return y && "align-items: ".concat(direction === "column" ? x : y);
}, function (_ref3) {
  var direction = _ref3.direction;
  return direction && "flex-direction: ".concat(direction);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.paletteWhite;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.paletteCloudNormal;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.orbit.fontWeightMedium;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.orbit.paletteCloudLight;
});

ItemWrapper.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = ItemWrapper;
exports.default = _default;