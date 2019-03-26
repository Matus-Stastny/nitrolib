"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Heading = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Heading"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _index = _interopRequireDefault(require("../../../Translate/index"));

var _index2 = _interopRequireDefault(require("./components/Sector/index"));

var _Theme = require("../../../../records/Theme");

var SectorWrapper = _styledComponents.default.div.withConfig({
  displayName: "TravelArrangement__SectorWrapper",
  componentId: "muyav4-0"
})(["flex-grow:1;flex-basis:0;:first-child{margin-bottom:", ";}", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceLarge;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)([":first-child{margin-right:", ";margin-bottom:0;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.spaceLarge;
})));

SectorWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "TravelArrangement__Wrapper",
  componentId: "muyav4-1"
})(["display:flex;flex-direction:column;", ";"], _mediaQuery.default.largeMobile((0, _styledComponents.css)(["flex-direction:row;"])));

var _ref4 =
/*#__PURE__*/
React.createElement(_Heading.default, {
  element: "h4",
  type: "title3",
  spaceAfter: "small"
}, React.createElement(_index.default, {
  t: "holidays.detail.travel_arrangement"
}));

var TravelArrangement = function TravelArrangement(_ref3) {
  var data = _ref3.data;
  var takeOff = data.takeOff,
      landing = data.landing;
  return React.createElement(_Stack.default, {
    spaceAfter: "large"
  }, _ref4, React.createElement(Wrapper, null, React.createElement(SectorWrapper, {
    key: "1"
  }, React.createElement(_index2.default, {
    data: takeOff,
    direction: "takeOff"
  })), React.createElement(SectorWrapper, {
    key: "2"
  }, React.createElement(_index2.default, {
    data: landing,
    direction: "landing"
  }))));
};

var _default = TravelArrangement;
exports.default = _default;