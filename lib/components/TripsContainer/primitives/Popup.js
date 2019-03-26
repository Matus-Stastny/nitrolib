"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Theme = require("../../../records/Theme");

var Popup = _styledComponents.default.div.withConfig({
  displayName: "Popup",
  componentId: "x97h9-0"
})(["position:absolute;top:50px;min-width:100%;", ":0;font-size:", ";background:", ";color:", ";border-radius:", ";cursor:default;box-shadow:", ";", ";", ";"], _rtl.right, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.fontSizeTextNormal;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteCloudLight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.borderRadiusNormal;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.boxShadowElevatedLevel1;
}, _mediaQuery.default.desktop((0, _styledComponents.css)(["", ":", ";"], _rtl.right, function (_ref6) {
  var positionMenuDesktop = _ref6.positionMenuDesktop;
  return "".concat(positionMenuDesktop, "px");
})), _mediaQuery.default.largeMobile((0, _styledComponents.css)(["", ":", ";min-width:", ";"], _rtl.right, function (_ref7) {
  var positionMenuTablet = _ref7.positionMenuTablet;
  return "".concat(positionMenuTablet, "px");
}, function (_ref8) {
  var width = _ref8.width;
  return width || "550px";
})));

Popup.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = Popup;
exports.default = _default;