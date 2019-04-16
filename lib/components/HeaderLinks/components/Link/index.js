"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Trip = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Trip"));

var _AirplaneUp = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/AirplaneUp"));

var _CarRental = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/CarRental"));

var _Accommodation = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Accommodation"));

var _Suitcase = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Suitcase"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _IconWrapper = _interopRequireDefault(require("../../primitives/IconWrapper"));

var _StyledLink = _interopRequireDefault(require("../../primitives/StyledLink"));

var mapIcons = {
  travel: React.createElement(_AirplaneUp.default, null),
  cars: React.createElement(_CarRental.default, null),
  rooms: React.createElement(_Accommodation.default, null),
  holidays: React.createElement(_Suitcase.default, null),
  logitravel: React.createElement(_Suitcase.default, null),
  bedfinder: React.createElement(_Suitcase.default, null),
  stories: React.createElement(_Trip.default, null)
}; // These exist just to be collected
// eslint-disable-next-line no-unused-vars

var KEYS = {
  travel: "search.service.travel_anywhere",
  rooms: "search.service.rooms",
  cars: "search.service.cars",
  holidays: "search.service.holidays",
  stories: "content.stories"
};

var Icon = _styledComponents.default.div.withConfig({
  displayName: "Link__Icon",
  componentId: "sdeomv-0"
})(["", ""], _mediaQuery.default.desktop((0, _styledComponents.css)(["display:none;"])));

var Link = function Link(_ref) {
  var active = _ref.active,
      link = _ref.link,
      newWindow = _ref.newWindow,
      icon = _ref.icon,
      text = _ref.text,
      inverted = _ref.inverted;
  return React.createElement(_StyledLink.default, {
    active: active,
    href: link,
    inverted: inverted,
    target: newWindow ? "_blank" : null,
    rel: newWindow ? "noopener noreferrer" : null
  }, React.createElement(_Stack.default, {
    flex: true,
    align: "center"
  }, icon && mapIcons[icon] && React.createElement(Icon, null, React.createElement(_IconWrapper.default, null, mapIcons[icon])), text));
};

Link.defaultProps = {
  active: false,
  newWindow: false
};
var _default = Link;
exports.default = _default;