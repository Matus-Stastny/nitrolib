"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Theme = require("../../../records/Theme");

var _button = _interopRequireDefault(require("../../../styles/mixins/button"));

var Day = _styledComponents.default.button.withConfig({
  displayName: "Day",
  componentId: "oknprz-0"
})(["", ";", ";height:50px;width:50px;display:flex;border-radius:4px;align-items:center;justify-content:center;cursor:", ";opacity:", ";", ""], _button.default, function (_ref) {
  var active = _ref.active,
      theme = _ref.theme;
  return active && "background: ".concat(theme.orbit.paletteBlueNormal);
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? "initial" : "pointer";
}, function (_ref3) {
  var disabled = _ref3.disabled,
      hidden = _ref3.hidden;
  return hidden && "0" || disabled && "0.5" || "1";
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return !disabled && (0, _styledComponents.css)(["&:hover{background:", ";}"], function (_ref5) {
    var theme = _ref5.theme,
        active = _ref5.active;
    return active ? theme.orbit.paletteBlueNormal : theme.orbit.paletteCloudLightHover;
  });
});

Day.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = Day;
exports.default = _default;