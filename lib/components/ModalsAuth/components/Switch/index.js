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

var _index = _interopRequireDefault(require("../../../Tab/index"));

var _Flex = _interopRequireDefault(require("../../../../primitives/Flex"));

var _index2 = _interopRequireDefault(require("../../../Translate/index"));

var _context = require("../../../../services/brand/context");

var MODALS = _interopRequireWildcard(require("../../../../consts/modals"));

var GtMiddleMobile = _styledComponents.default.div.withConfig({
  displayName: "Switch__GtMiddleMobile",
  componentId: "sc-1r8jl65-0"
})(["display:none;", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["display:block;"])));

var LtMiddleMobile = _styledComponents.default.div.withConfig({
  displayName: "Switch__LtMiddleMobile",
  componentId: "sc-1r8jl65-1"
})(["display:block;", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["display:none;"])));

var _ref2 =
/*#__PURE__*/
React.createElement(_index2.default, {
  t: "account.oneBookingLogin"
});

var _ref3 =
/*#__PURE__*/
React.createElement(_index2.default, {
  t: "account.sign_up"
});

var _ref4 =
/*#__PURE__*/
React.createElement(_index2.default, {
  t: "account.sign_in"
});

var _ref5 =
/*#__PURE__*/
React.createElement(_index2.default, {
  t: "account.oneBookingLogin"
});

var _ref6 =
/*#__PURE__*/
React.createElement(_index2.default, {
  t: "account.sign_up"
});

var _ref7 =
/*#__PURE__*/
React.createElement(_index2.default, {
  t: "account.sign_in"
});

var Switch = function Switch(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  return React.createElement(React.Fragment, null, React.createElement(GtMiddleMobile, null, React.createElement(_Flex.default, null, React.createElement(_index.default, {
    id: MODALS.MY_BOOKING,
    active: value === MODALS.MY_BOOKING,
    onClick: onChange
  }, _ref2), React.createElement(_context.Consumer, null, function (brand) {
    return brand.auth.credentials && React.createElement(React.Fragment, null, React.createElement(_index.default, {
      id: MODALS.REGISTER,
      active: value === MODALS.REGISTER,
      onClick: onChange
    }, _ref3), React.createElement(_index.default, {
      id: MODALS.SIGN_IN,
      active: value === MODALS.SIGN_IN,
      onClick: onChange
    }, _ref4));
  }))), React.createElement(LtMiddleMobile, null, React.createElement(_Flex.default, {
    direction: "column",
    x: "stretch"
  }, React.createElement(_index.default, {
    id: MODALS.MY_BOOKING,
    active: value === MODALS.MY_BOOKING,
    onClick: onChange
  }, _ref5), React.createElement(_context.Consumer, null, function (brand) {
    return brand.auth.credentials && React.createElement(React.Fragment, null, React.createElement(_index.default, {
      id: MODALS.REGISTER,
      active: value === MODALS.REGISTER,
      onClick: onChange
    }, _ref6), React.createElement(_index.default, {
      id: MODALS.SIGN_IN,
      active: value === MODALS.SIGN_IN,
      onClick: onChange
    }, _ref7));
  }))));
};

var _default = Switch;
exports.default = _default;