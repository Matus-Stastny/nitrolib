"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _Core = _interopRequireDefault(require("./components/Core"));

var DURATION = 250;

var SideBar = function SideBar(_ref) {
  var shown = _ref.shown,
      inverted = _ref.inverted,
      unmasked = _ref.unmasked,
      onClick = _ref.onClick,
      children = _ref.children;
  return React.createElement(_reactTransitionGroup.Transition, {
    in: shown,
    timeout: DURATION
  }, function (status) {
    return React.createElement(_Core.default, {
      status: status,
      inverted: inverted,
      onClick: onClick,
      unmasked: unmasked
    }, children);
  });
};

var _default = SideBar;
exports.default = _default;