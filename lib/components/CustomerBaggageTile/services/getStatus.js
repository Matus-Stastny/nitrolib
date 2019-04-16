"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStatus;

var _equals2 = _interopRequireDefault(require("ramda/src/equals"));

function getStatus(_ref) {
  var current = _ref.current,
      selected = _ref.selected,
      isProcessing = _ref.isProcessing;

  if (current && selected && (0, _equals2.default)(current, selected)) {
    return null;
  }

  if (isProcessing) {
    return "processing";
  }

  if (current && selected) {
    return "unpaid";
  }

  return "notAvailable";
}