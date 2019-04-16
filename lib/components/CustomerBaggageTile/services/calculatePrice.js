"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculatePrice;

var _decimal = require("decimal.js");

var _getTotalPrice = _interopRequireDefault(require("../../../services/baggage/getTotalPrice"));

function calculatePrice(_ref) {
  var selected = _ref.selected,
      current = _ref.current,
      combinations = _ref.combinations;

  if (selected && current) {
    var selectedPrice = (0, _getTotalPrice.default)({
      combinationIndices: {
        handBag: [selected.handBag],
        holdBag: [selected.holdBag]
      },
      combinations: combinations
    });
    var currentPrice = (0, _getTotalPrice.default)({
      combinationIndices: {
        handBag: [current.handBag],
        holdBag: [current.holdBag]
      },
      combinations: combinations
    });
    var diff = new _decimal.Decimal(selectedPrice).minus(currentPrice).toFixed(2);
    return new _decimal.Decimal(diff).toNumber();
  }

  return null;
}