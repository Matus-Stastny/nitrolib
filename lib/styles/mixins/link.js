"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var linkMixin = (0, _styledComponents.css)(["a{text-decoration:none;font-weight:", ";color:", ";&:hover{color:", ";text-decoration:underline;}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.fontWeightBold;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.colorTextLinkPrimary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.colorTextLinkPrimaryHover;
});
var _default = linkMixin;
exports.default = _default;