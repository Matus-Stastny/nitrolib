"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Tooltip = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Tooltip"));

var _getTooltipText = _interopRequireDefault(require("./services/getTooltipText"));

var _getBadge = _interopRequireDefault(require("./services/getBadge"));

var TitleBadge = function TitleBadge(_ref) {
  var orderStatus = _ref.orderStatus,
      price = _ref.price;
  return React.createElement(_Tooltip.default, {
    content: (0, _getTooltipText.default)(orderStatus),
    preferredPosition: "top",
    size: "small"
  }, React.createElement(React.Fragment, null, (0, _getBadge.default)(orderStatus, price)));
};

var _default = TitleBadge;
exports.default = _default;