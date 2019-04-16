"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTotalPrice;

var _decimal = require("decimal.js");

function getTotalPrice(_ref) {
  var combinationIndices = _ref.combinationIndices,
      combinations = _ref.combinations;
  var handBag = combinations.handBag,
      holdBag = combinations.holdBag;
  var holdBagsTotalPrice = combinationIndices.holdBag.reduce(function (acc, index) {
    return new _decimal.Decimal(holdBag[index].price.amount).plus(acc);
  }, 0);
  var handBagsTotalPrice = combinationIndices.handBag.reduce(function (acc, index) {
    return new _decimal.Decimal(handBag[index].price.amount).plus(acc);
  }, 0);
  var sum = new _decimal.Decimal(holdBagsTotalPrice).plus(handBagsTotalPrice).toFixed(2);
  return new _decimal.Decimal(sum).toNumber();
}