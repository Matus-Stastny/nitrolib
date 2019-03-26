"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Badge = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Badge"));

var _StarFull = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/StarFull"));

var _Plus = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Plus"));

var _Text = _interopRequireDefault(require("../Text"));

var _ref2 =
/*#__PURE__*/
React.createElement(_StarFull.default, {
  customColor: "#f9971e"
});

var _ref3 =
/*#__PURE__*/
React.createElement(_Plus.default, {
  customColor: "#0176d2"
});

var _ref4 =
/*#__PURE__*/
React.createElement(_Text.default, {
  t: "booking.service_packages.premium",
  type: "white",
  size: "small"
});

var _ref5 =
/*#__PURE__*/
React.createElement(_Text.default, {
  t: "booking.service_packages.plus",
  size: "small"
});

var ServiceBadge = function ServiceBadge(_ref) {
  var premium = _ref.premium;
  return React.createElement(_Badge.default, {
    type: premium ? "dark" : "neutral",
    icon: premium ? _ref2 : _ref3
  }, premium ? _ref4 : _ref5);
};

var _default = ServiceBadge;
exports.default = _default;