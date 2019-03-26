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
  displayName: "Mobile__Wrapper",
  componentId: "sc-12in88y-0"
})(["display:", ";", ";"], function (_ref) {
  var display = _ref.display;
  return display;
}, _mediaQuery.default.tablet((0, _styledComponents.css)(["display:none;"])));

var Mobile = function Mobile(_ref2) {
  var display = _ref2.display,
      children = _ref2.children;
  return React.createElement(Wrapper, {
    display: display
  }, children);
};

Mobile.defaultProps = {
  display: "block"
};
var _default = Mobile;
exports.default = _default;