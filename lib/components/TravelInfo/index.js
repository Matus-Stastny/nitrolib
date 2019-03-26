"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Calendar = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Calendar"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _SectionHeading = _interopRequireDefault(require("./components/SectionHeading"));

var _TravelDates = _interopRequireDefault(require("./components/TravelDates"));

var _TravelArrangement = _interopRequireDefault(require("./components/TravelArrangement"));

var _Passengers = _interopRequireDefault(require("./components/Passengers"));

var _Theme = require("../../records/Theme");

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "TravelInfo__Wrapper",
  componentId: "sc-6baekd-0"
})(["margin-bottom:", ";padding:", " ", ";background:", ";border-width:", ";border-style:", ";border-color:", ";border-radius:", ";box-shadow:", ";", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceMedium;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.spaceLarge;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.spaceSmall;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.paletteWhite;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.borderWidthCard;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.orbit.borderStyleCard;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.orbit.borderColorCard;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.borderRadiusNormal;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.orbit.boxShadowElevatedLevel1;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["padding:", ";"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.orbit.spaceLarge;
})));

Wrapper.defaultProps = {
  theme: _Theme.themeDefault
}; // Used custom `Separator` instead of orbit’s one
// because of the responsivity

var Separator = _styledComponents.default.div.withConfig({
  displayName: "TravelInfo__Separator",
  componentId: "sc-6baekd-1"
})(["margin-bottom:", ";border-bottom-width:", ";border-bottom-style:solid;border-bottom-color:", ";", ";"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.orbit.spaceLarge;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.orbit.heightSeparator;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.orbit.backgroundSeparator;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["display:none;"])));

Separator.defaultProps = {
  theme: _Theme.themeDefault
};

var Row = _styledComponents.default.div.withConfig({
  displayName: "TravelInfo__Row",
  componentId: "sc-6baekd-2"
})(["", ";"], _mediaQuery.default.largeMobile((0, _styledComponents.css)(["display:flex;"])));

var Column = _styledComponents.default.div.withConfig({
  displayName: "TravelInfo__Column",
  componentId: "sc-6baekd-3"
})(["flex-grow:1;flex-basis:0;:first-child{margin-right:", ";}"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.orbit.spaceLarge;
});

Column.defaultProps = {
  theme: _Theme.themeDefault
};

var TravelDatesWrapper = _styledComponents.default.div.withConfig({
  displayName: "TravelInfo__TravelDatesWrapper",
  componentId: "sc-6baekd-4"
})(["margin-bottom:", ";", ";"], function (_ref15) {
  var theme = _ref15.theme;
  return theme.orbit.spaceLarge;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["margin-bottom:0;"])));

TravelDatesWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref17 =
/*#__PURE__*/
React.createElement(_SectionHeading.default, {
  icon: React.createElement(_Calendar.default, null),
  t: "holidays.travel_info.title"
});

var _ref18 =
/*#__PURE__*/
React.createElement(Separator, null);

var _ref19 =
/*#__PURE__*/
React.createElement(Separator, null);

var TravelInfo = function TravelInfo(_ref16) {
  var travelArrangement = _ref16.travelArrangement,
      travelDates = _ref16.travelDates,
      passengers = _ref16.passengers;
  return React.createElement(Wrapper, null, _ref17, React.createElement(_TravelArrangement.default, {
    data: travelArrangement
  }), _ref18, React.createElement(Row, null, React.createElement(Column, null, React.createElement(TravelDatesWrapper, null, React.createElement(_TravelDates.default, {
    data: travelDates
  })), _ref19), React.createElement(Column, null, React.createElement(_Passengers.default, passengers))));
};

var _default = TravelInfo;
exports.default = _default;