"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Theme = require("../../../records/Theme");

var DropDown = _styledComponents.default.div.withConfig({
  displayName: "PickerDropDown__DropDown",
  componentId: "sc-1gr0dov-0"
})(["width:100%;background:", ";max-height:215px;box-sizing:border-box;overflow-y:scroll;z-index:2;box-shadow:0 0 1px rgba(0,0,0,0.16),0 1px 32px rgba(0,0,0,0.32);opacity:1;top:50px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteWhite;
});

DropDown.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = DropDown;
exports.default = _default;