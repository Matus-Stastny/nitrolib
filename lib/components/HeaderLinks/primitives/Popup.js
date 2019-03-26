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

// TODO: change z-index value after z-index ranges will be set for all modules
var Popup = _styledComponents.default.div.withConfig({
  displayName: "Popup",
  componentId: "sc-16rukrn-0"
})(["z-index:1000;position:absolute;left:0;right:0;top:50px;margin:12px;border:0;box-shadow:0 6px 16px 0 rgba(45,53,59,0.22),0 1px 3px 0 rgba(0,0,0,0.1);color:", ";overflow:hidden;width:95%;min-width:230px;box-sizing:border-box;padding:20px;background-color:", ";user-select:none;min-height:100px;", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteInkDark;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteWhite;
}, _mediaQuery.default.tablet((0, _styledComponents.css)(["width:350px;"])));

Popup.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = Popup;
exports.default = _default;