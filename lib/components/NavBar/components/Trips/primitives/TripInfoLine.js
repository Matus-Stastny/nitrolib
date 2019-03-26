"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Theme = require("../../../../../records/Theme");

var TripInfoLine = _styledComponents.default.div.withConfig({
  displayName: "TripInfoLine",
  componentId: "sc-12k40lo-0"
})(["display:flex;line-height:normal;text-transform:capitalize;", ";", ";", ";span{height:18px;line-height:18px;}svg{height:20px;}"], function (_ref) {
  var darker = _ref.darker,
      theme = _ref.theme;
  return darker ? "color: ".concat(theme.orbit.paletteInkNormal) : "color: ".concat(theme.orbit["neutral-700"]);
}, function (_ref2) {
  var fontSize = _ref2.fontSize;
  return fontSize ? "font-size: ".concat(fontSize, "px") : (0, _styledComponents.css)(["font-size:", ";"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.orbit.fontSizeTextNormal;
  });
}, function (_ref4) {
  var margin = _ref4.margin;
  return margin ? "margin: ".concat(margin) : "margin: 2px 0";
});

TripInfoLine.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = TripInfoLine;
exports.default = _default;