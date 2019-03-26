"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Flex = _styledComponents.default.div.withConfig({
  displayName: "Flex",
  componentId: "mtabtl-0"
})(["display:flex;", ";", ";", ";", ";"], function (_ref) {
  var x = _ref.x,
      y = _ref.y,
      direction = _ref.direction;
  return x && "justify-content: ".concat(direction === "column" ? y : x);
}, function (_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      direction = _ref2.direction;
  return y && "align-items: ".concat(direction === "column" ? x : y);
}, function (_ref3) {
  var direction = _ref3.direction;
  return direction && "flex-direction: ".concat(direction);
}, function (_ref4) {
  var wrap = _ref4.wrap;
  return wrap && "flex-wrap: ".concat(wrap);
});

Flex.defaultProps = {
  x: "flex-start",
  y: "flex-start",
  direction: "row",
  wrap: "nowrap"
};
var _default = Flex;
exports.default = _default;