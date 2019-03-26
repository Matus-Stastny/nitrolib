"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Passengers = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Passengers"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Heading = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Heading"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _Theme = require("../../../../records/Theme");

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Passengers__Wrapper",
  componentId: "sc-1rgdi93-0"
})(["display:flex;"]);

var StyledPassengersIcon = (0, _styledComponents.default)(_Passengers.default).withConfig({
  displayName: "Passengers__StyledPassengersIcon",
  componentId: "sc-1rgdi93-1"
})(["margin-right:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceSmall;
});
StyledPassengersIcon.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref3 =
/*#__PURE__*/
React.createElement(_Heading.default, {
  element: "h4",
  type: "title3",
  spaceAfter: "small"
}, React.createElement(_Translate.default, {
  t: "holidays.travel_info.passengers"
}));

var _ref4 =
/*#__PURE__*/
React.createElement(StyledPassengersIcon, {
  color: "primary"
});

var _ref5 =
/*#__PURE__*/
React.createElement("br", null);

var Passengers = function Passengers(_ref2) {
  var adults = _ref2.adults,
      children = _ref2.children;
  return React.createElement(React.Fragment, null, _ref3, React.createElement(Wrapper, null, _ref4, React.createElement(_Text.default, null, React.createElement(_Translate.default, {
    t: "holidays.travel_info.x_adults",
    values: {
      num: adults
    }
  }), _ref5, React.createElement(_Translate.default, {
    t: "holidays.travel_info.x_child",
    values: {
      num: children
    }
  }))));
};

var _default = Passengers;
exports.default = _default;