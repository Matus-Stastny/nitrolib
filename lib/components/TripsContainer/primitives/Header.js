"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Theme = require("../../../records/Theme");

var Header = _styledComponents.default.div.withConfig({
  displayName: "Header",
  componentId: "sc-13bgwg6-0"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;position:relative;height:40px;overflow:hidden;box-shadow:", ";background:", ";z-index:2;"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.boxShadowElevatedLevel1;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteWhite;
});

Header.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = Header;
exports.default = _default;