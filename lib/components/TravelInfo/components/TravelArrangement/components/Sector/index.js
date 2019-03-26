"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _AirplaneTakeoff = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/AirplaneTakeoff"));

var _AirplaneLanding = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/AirplaneLanding"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _StopoverArrow = _interopRequireDefault(require("@kiwicom/orbit-components/lib/StopoverArrow"));

var _Theme = require("../../../../../../records/Theme");

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Sector__Wrapper",
  componentId: "rrx8fs-0"
})(["display:flex;align-items:center;margin-bottom:", ";padding-top:", ";padding-right:", ";padding-bottom:", ";padding-left:", ";background:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceSmall;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.spaceSmall;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.spaceLarge;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.spaceMedium;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.spaceLarge;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.orbit.backgroundBody;
});

Wrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var RouteIcon = _styledComponents.default.div.withConfig({
  displayName: "Sector__RouteIcon",
  componentId: "rrx8fs-1"
})(["margin-top:5px;margin-right:", ";"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.orbit.spaceLarge;
});

RouteIcon.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref9 =
/*#__PURE__*/
React.createElement(_AirplaneTakeoff.default, {
  color: "secondary"
});

var _ref10 =
/*#__PURE__*/
React.createElement(_AirplaneLanding.default, {
  color: "secondary"
});

var Sector = function Sector(_ref8) {
  var data = _ref8.data,
      direction = _ref8.direction;
  var from = data.from,
      to = data.to,
      stops = data.stops,
      note = data.note;
  return React.createElement(React.Fragment, null, React.createElement(Wrapper, null, React.createElement(RouteIcon, null, direction === "takeOff" ? _ref9 : _ref10), React.createElement("div", null, React.createElement(_Stack.default, {
    spaceAfter: "smallest"
  }, React.createElement(_Text.default, null, from)), React.createElement(_Stack.default, {
    direction: "row",
    spacing: "condensed",
    align: "center"
  }, React.createElement(_StopoverArrow.default, {
    stops: stops
  }), React.createElement(_Text.default, {
    element: "span",
    weight: "bold",
    size: "large"
  }, to)))), React.createElement(_Text.default, {
    size: "small",
    type: "secondary"
  }, note));
};

var _default = Sector;
exports.default = _default;