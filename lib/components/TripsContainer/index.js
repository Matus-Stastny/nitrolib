"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Popup = _interopRequireDefault(require("./primitives/Popup"));

var _Header = _interopRequireDefault(require("./primitives/Header"));

var _Content = _interopRequireDefault(require("./primitives/Content"));

var TripContainer = function TripContainer(_ref) {
  var header = _ref.header,
      children = _ref.children,
      padding = _ref.padding,
      width = _ref.width,
      positionMenuTablet = _ref.positionMenuTablet,
      positionMenuDesktop = _ref.positionMenuDesktop;
  return React.createElement(_Popup.default, {
    positionMenuTablet: positionMenuTablet,
    positionMenuDesktop: positionMenuDesktop,
    width: width
  }, header && React.createElement(_Header.default, null, header), React.createElement(_Content.default, {
    padding: padding
  }, children));
};

var _default = TripContainer;
exports.default = _default;