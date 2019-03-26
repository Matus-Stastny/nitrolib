"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Theme = require("../../../records/Theme");

var Content = _styledComponents.default.div.withConfig({
  displayName: "Content",
  componentId: "uwmvvu-0"
})(["padding:", ";"], function (_ref) {
  var padding = _ref.padding,
      theme = _ref.theme;
  return padding ? theme.orbit.spaceSmall : "0";
});

Content.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = Content;
exports.default = _default;