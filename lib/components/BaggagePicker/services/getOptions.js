"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOptions;

var _includes2 = _interopRequireDefault(require("ramda/src/includes"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _clone2 = _interopRequireDefault(require("ramda/src/clone"));

var _decimal = require("decimal.js");

var _getOptionItems = _interopRequireDefault(require("./getOptionItems"));

function getOptions(args) {
  var context = args.context,
      currentCombination = args.currentCombination,
      passengerCategory = args.passengerCategory,
      pickerType = args.pickerType,
      _args$baggage = args.baggage,
      combinations = _args$baggage.combinations,
      definitions = _args$baggage.definitions;
  var bagDefinitions = definitions[pickerType];
  var combinationsCopy = (0, _clone2.default)([combinations])[0];
  var indexedCombinations = combinationsCopy[pickerType].map(function (item, index) {
    return (0, _objectSpread2.default)({}, item, {
      originalIndex: index
    });
  }).filter(function (i) {
    return (// $FlowExpected: Includes is missing in module ramda
      (0, _includes2.default)(passengerCategory, i.conditions.passengerGroups)
    );
  });
  var options = indexedCombinations.map(function (c) {
    return {
      originalIndex: c.originalIndex,
      pickerType: pickerType,
      price: c.price,
      items: (0, _getOptionItems.default)(bagDefinitions, c.indices)
    };
  });

  if (context === "mmb" && typeof currentCombination === "number") {
    var currentComb = indexedCombinations.find(function (c) {
      return c.originalIndex === currentCombination;
    });
    var currentCombinationPrice = currentComb ? currentComb.price.amount : 0;
    return options.filter(function (o) {
      return o.price.amount >= currentCombinationPrice;
    }).map(function (option) {
      var priceAmount = option.price.amount;
      var copyOption = (0, _clone2.default)([option])[0];
      copyOption.price.amount = new _decimal.Decimal(priceAmount).minus(currentCombinationPrice).toNumber();
      return copyOption;
    });
  }

  return options;
}