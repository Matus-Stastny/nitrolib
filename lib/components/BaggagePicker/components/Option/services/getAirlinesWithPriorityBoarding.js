"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uniq2 = _interopRequireDefault(require("ramda/src/uniq"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var getAirlinesWithPriorityBoarding = function getAirlinesWithPriorityBoarding(itemsArray) {
  var airlines = itemsArray.reduce(function (acc, item) {
    if (item.conditions && item.conditions.isPriority) {
      return [].concat((0, _toConsumableArray2.default)(acc), (0, _toConsumableArray2.default)(item.conditions.isPriority));
    }

    return acc;
  }, []);
  return (0, _uniq2.default)(airlines);
};

var _default = getAirlinesWithPriorityBoarding;
exports.default = _default;