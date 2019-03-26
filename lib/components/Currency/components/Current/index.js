"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Currency = require("../../../../records/Currency");

var _Code = _interopRequireDefault(require("../../primitives/Code"));

var _Sign = _interopRequireDefault(require("../../primitives/Sign"));

var _Theme = require("../../../../records/Theme");

var Separator = _styledComponents.default.span.withConfig({
  displayName: "Current__Separator",
  componentId: "sc-1q1msso-0"
})(["margin:0 3px;"]);

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Current__Wrapper",
  componentId: "sc-1q1msso-1"
})(["display:flex;color:", ";&:hover{color:", ";}"], function (_ref) {
  var theme = _ref.theme,
      inverted = _ref.inverted;
  return inverted ? theme.orbit.paletteWhite : theme.orbit.paletteInkNormal;
}, function (_ref2) {
  var theme = _ref2.theme,
      inverted = _ref2.inverted;
  return inverted ? theme.orbit.paletteWhiteHover : theme.orbit.paletteProductNormalHover;
});

Wrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref4 =
/*#__PURE__*/
React.createElement(Separator, null, "-");

var Current = function Current(_ref3) {
  var current = _ref3.current,
      inverted = _ref3.inverted;
  return React.createElement(Wrapper, {
    inverted: inverted,
    "data-test": "Currency-Open"
  }, React.createElement(_Code.default, null, (0, _Currency.getCode)(current.id)), _ref4, React.createElement(_Sign.default, null, (0, _Currency.getSymbol)(current.format)));
};

var _default = Current;
exports.default = _default;