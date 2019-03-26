"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Theme = require("../../../records/Theme");

var _button = _interopRequireDefault(require("../../../styles/mixins/button"));

var PickerRow = _styledComponents.default.button.withConfig({
  displayName: "PickerRow",
  componentId: "sc-1lqwra9-0"
})(["", ";display:block;width:100%;padding:", ";background:", ";cursor:pointer;box-shadow:0 1px 0 ", ";&:hover{background:", ";}"], _button.default, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceSmall;
}, function (_ref2) {
  var theme = _ref2.theme,
      selected = _ref2.selected;
  return selected ? theme.orbit.paletteCloudLightHover : theme.orbit.paletteWhite;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.paletteCloudLightHover;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.paletteCloudLightHover;
});

PickerRow.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = PickerRow;
exports.default = _default;