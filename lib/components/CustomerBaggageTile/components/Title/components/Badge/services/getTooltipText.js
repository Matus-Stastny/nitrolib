"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTooltipText;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../../../../../../Translate/index"));

var _ref =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.tooltip.unpaid"
});

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.tooltip.processing"
});

var _ref3 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.tooltip.not_available"
});

function getTooltipText(status) {
  switch (status) {
    case "unpaid":
      return _ref;

    case "processing":
      return _ref2;

    case "notAvailable":
      return _ref3;

    default:
      return null;
  }
}