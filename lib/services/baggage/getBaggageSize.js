"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBaggageSize;

function getBaggageSize(_ref) {
  var height = _ref.height,
      length = _ref.length,
      weight = _ref.weight,
      width = _ref.width;
  return "".concat(length || 0, " x ").concat(width || 0, " x ").concat(height || 0, " cm, ").concat(weight || 0, " kg");
}