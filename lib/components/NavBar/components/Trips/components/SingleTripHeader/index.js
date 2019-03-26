"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _ButtonLink = _interopRequireDefault(require("../../../../primitives/ButtonLink"));

var _Translate = _interopRequireDefault(require("../../../../../Translate"));

var _context = require("../../../../../../services/intl/context");

var _ref =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.past_trips"
});

var SingleTripHeader = function SingleTripHeader() {
  return React.createElement(_context.Consumer, null, function (intl) {
    return React.createElement(React.Fragment, null, React.createElement(_ButtonLink.default, {
      marginLeft: 20,
      bold: true,
      href: "/".concat(intl.language.id, "/account#future"),
      color: "secondary"
    }, React.createElement(_Translate.default, {
      t: "account.upcoming_trips",
      values: {
        trips: 1
      }
    })), React.createElement(_ButtonLink.default, {
      marginRight: 20,
      color: "primary",
      bold: true,
      href: "/".concat(intl.language.id, "/account#past")
    }, _ref));
  });
};

var _default = SingleTripHeader;
exports.default = _default;