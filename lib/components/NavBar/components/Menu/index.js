"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _AccountCircle = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/AccountCircle"));

var _Desktop = _interopRequireDefault(require("../../../Desktop"));

var _Mobile = _interopRequireDefault(require("../../../Mobile"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _ValueBind = _interopRequireDefault(require("../../../ValueBind"));

var _context = require("../../../../services/modal/context");

var _context2 = require("../../../../services/auth/context");

var _Button = _interopRequireDefault(require("../../primitives/Button"));

var _Trips = _interopRequireDefault(require("../Trips"));

var _SideNav = _interopRequireDefault(require("../SideNav"));

var MODALS = _interopRequireWildcard(require("../../../../consts/modals"));

var _marginMixin = _interopRequireDefault(require("../../styles/marginMixin"));

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Menu__Wrapper",
  componentId: "aslx2x-0"
})(["", ";"], _marginMixin.default);

var _ref5 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.my_bookings_action"
});

var _ref6 =
/*#__PURE__*/
React.createElement(_AccountCircle.default, null);

var Menu = function Menu(_ref) {
  var subscription = _ref.subscription,
      debug = _ref.debug,
      portal = _ref.portal,
      inverted = _ref.inverted,
      onSaveLanguage = _ref.onSaveLanguage,
      onSelectTrip = _ref.onSelectTrip,
      onSetModal = _ref.onSetModal;
  return React.createElement(_context.Consumer, null, function (_ref2) {
    var onChange = _ref2.onChange;
    return React.createElement(React.Fragment, null, React.createElement(Wrapper, null, React.createElement(_context2.Consumer, null, function (_ref3) {
      var auth = _ref3.auth,
          environment = _ref3.environment;
      return auth === null ? React.createElement(_ValueBind.default, {
        value: MODALS.MY_BOOKING,
        onChange: onChange
      }, function (_ref4) {
        var onClick = _ref4.onClick;
        return React.createElement(React.Fragment, null, React.createElement(_Desktop.default, {
          display: "flex"
        }, React.createElement(_Button.default, {
          onClick: onClick,
          color: !inverted && "secondary"
        }, _ref5)), React.createElement(_Mobile.default, {
          display: "flex"
        }, React.createElement(_Button.default, {
          color: !inverted && "secondary",
          onClick: onClick
        }, _ref6)));
      }) : React.createElement(_Trips.default, {
        auth: auth,
        env: environment,
        onSelect: onSelectTrip
      });
    })), React.createElement(Wrapper, null, React.createElement(_SideNav.default, {
      subscription: subscription,
      debug: debug,
      inverted: inverted,
      portal: portal,
      onOpenModal: onChange,
      onSaveLanguage: onSaveLanguage,
      onSetModal: onSetModal
    })));
  });
};

var _default = Menu;
exports.default = _default;