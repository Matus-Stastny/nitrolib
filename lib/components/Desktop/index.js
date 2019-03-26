"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Desktop__Wrapper",
  componentId: "z83utc-0"
})(["display:none;", ";"], _mediaQuery.default.tablet((0, _styledComponents.css)(["display:", ";"], function (_ref) {
  var display = _ref.display;
  return display;
})));

var Desktop = function Desktop(_ref2) {
  var display = _ref2.display,
      children = _ref2.children;
  return React.createElement(Wrapper, {
    display: display
  }, children);
};

Desktop.defaultProps = {
  display: "block"
};
var _default = Desktop;
exports.default = _default;