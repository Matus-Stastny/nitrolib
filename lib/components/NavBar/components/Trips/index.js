"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Passenger = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Passenger"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Button = _interopRequireDefault(require("../../primitives/Button"));

var _ClickOutside = _interopRequireDefault(require("../../../ClickOutside"));

var _Desktop = _interopRequireDefault(require("../../../Desktop"));

var _Mobile = _interopRequireDefault(require("../../../Mobile"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _Theme = require("../../../../records/Theme");

var _Toggle = _interopRequireDefault(require("../../../Toggle"));

var _TripDataList = _interopRequireDefault(require("./components/TripDataList"));

var _Flex = _interopRequireDefault(require("../../../../primitives/Flex"));

var _SingleTripData = _interopRequireDefault(require("./components/SingleTripData"));

var _userType = _interopRequireDefault(require("./services/userType"));

var UserName = _styledComponents.default.div.withConfig({
  displayName: "Trips__UserName",
  componentId: "m824m5-0"
})(["max-width:65px;display:inline;overflow:hidden;direction:ltr;text-overflow:ellipsis;"]);

var UserWrapper = _styledComponents.default.div.withConfig({
  displayName: "Trips__UserWrapper",
  componentId: "m824m5-1"
})(["display:none;", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["display:flex;padding-left:5px;font-weight:", ";color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.fontWeightNormal;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteInkLightActive;
})));

UserWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var HideOnLower = _styledComponents.default.div.withConfig({
  displayName: "Trips__HideOnLower",
  componentId: "m824m5-2"
})(["display:none;", ""], _mediaQuery.default.tablet((0, _styledComponents.css)(["display:block;margin-left:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.spaceXXSmall;
})));

HideOnLower.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref7 =
/*#__PURE__*/
React.createElement(_Passenger.default, {
  size: "small"
});

var _ref8 =
/*#__PURE__*/
React.createElement(HideOnLower, null, React.createElement(_Translate.default, {
  t: "account.my_bookings_action"
}));

var _ref9 =
/*#__PURE__*/
React.createElement("span", null, "(");

var _ref10 =
/*#__PURE__*/
React.createElement("span", null, ")");

var _ref11 =
/*#__PURE__*/
React.createElement(_Passenger.default, {
  size: "small"
});

var Trips = function Trips(_ref4) {
  var auth = _ref4.auth,
      env = _ref4.env,
      onSelect = _ref4.onSelect;

  var _ref6 =
  /*#__PURE__*/
  React.createElement(_TripDataList.default, {
    env: env,
    onSelect: onSelect
  });

  return React.createElement(_Toggle.default, null, function (_ref5) {
    var open = _ref5.open,
        onToggle = _ref5.onToggle;
    return React.createElement("div", null, open && React.createElement(_ClickOutside.default, {
      onClickOutside: function onClickOutside(ev) {
        ev.stopPropagation();
        onToggle();
      }
    }, auth.type === "token" ? React.createElement(_SingleTripData.default, {
      singleBid: auth.bid,
      env: env,
      onSelect: onSelect
    }) : _ref6), React.createElement(_Desktop.default, {
      display: "flex"
    }, React.createElement(_Flex.default, {
      y: "center"
    }, _ref7, React.createElement(_Button.default, {
      onClick: onToggle,
      color: "secondary"
    }, _ref8, React.createElement(UserWrapper, null, _ref9, React.createElement(UserName, null, "".concat((0, _userType.default)(auth), "...")), _ref10)))), React.createElement(_Mobile.default, {
      display: "flex"
    }, React.createElement(_Button.default, {
      onClick: onToggle,
      color: "secondary"
    }, _ref11, React.createElement(UserWrapper, null, React.createElement(UserName, null, (0, _userType.default)(auth))))));
  });
};

var _default = Trips;
exports.default = _default;