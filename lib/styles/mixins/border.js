"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBorderState = getBorderState;
exports.default = void 0;

var _styledComponents = require("styled-components");

var _ = require("..");

function getBorderState(_ref) {
  var error = _ref.error,
      visited = _ref.visited,
      hint = _ref.hint;

  if (error && visited) {
    return "error";
  }

  if (hint) {
    return "hint";
  }

  if (visited) {
    return "success";
  }

  return "base";
}

var stateToColor = {
  base: "paletteCloudNormalHover",
  success: "paletteProductNormal",
  hint: "paletteProductNormal",
  error: "paletteRedNormal"
};
var borderHoverMixin = (0, _styledComponents.css)(["&:hover{border-color:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteInkNormal;
});
var borderMixin = (0, _styledComponents.css)(["border:", "px solid ", ";border-radius:", "px;", ";"], _.border.size, function (_ref3) {
  var theme = _ref3.theme,
      state = _ref3.state;
  return theme.orbit[stateToColor[state]];
}, _.border.radius, function (_ref4) {
  var state = _ref4.state;
  return state === "base" && borderHoverMixin;
});
var _default = borderMixin;
exports.default = _default;