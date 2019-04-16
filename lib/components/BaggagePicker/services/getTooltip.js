"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTooltip;

var React = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../../Translate/index"));

var _ref =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.tooltip.cabin_baggage"
});

var _ref2 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.tooltip.checked_baggage"
});

function getTooltip(type) {
  return type === "handBag" ? _ref : _ref2;
}