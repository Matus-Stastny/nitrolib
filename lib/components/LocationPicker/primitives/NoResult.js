"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Theme = require("../../../records/Theme");

var NoResult = _styledComponents.default.div.withConfig({
  displayName: "NoResult",
  componentId: "sc-14eooyv-0"
})(["padding:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceSmall;
});

NoResult.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = NoResult;
exports.default = _default;