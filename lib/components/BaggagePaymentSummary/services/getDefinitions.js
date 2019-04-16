"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getDefinitions = function getDefinitions(def, indices) {
  var data = indices.reduce(function (acc, optionIndex) {
    var key = optionIndex.toString();

    if (acc[key]) {
      acc[key].amount += 1;
    } else {
      acc[key] = {
        amount: 1,
        category: def[optionIndex].category,
        restrictions: def[optionIndex].restrictions,
        conditions: def[optionIndex].conditions
      };
    }

    return acc;
  }, {});
  return Object.keys(data).map(function (key) {
    return data[key];
  });
};

var _default = getDefinitions;
exports.default = _default;