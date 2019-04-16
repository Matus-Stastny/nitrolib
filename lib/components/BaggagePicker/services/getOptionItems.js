"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOptionItems;

function getOptionItems(defs, indices) {
  return indices.reduce(function (acc, optionIndex) {
    if (acc[optionIndex]) {
      acc[optionIndex].amount += 1;
    } else {
      acc[optionIndex] = {
        amount: 1,
        category: defs[optionIndex].category,
        restrictions: defs[optionIndex].restrictions,
        conditions: defs[optionIndex].conditions
      };
    }

    return acc;
  }, {});
}