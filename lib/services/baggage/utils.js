"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptions = exports.getOptionItems = exports.getTotalPrice = exports.getIconFromCategory = exports.getTextFromCategory = void 0;

var _includes2 = _interopRequireDefault(require("ramda/src/includes"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _clone2 = _interopRequireDefault(require("ramda/src/clone"));

var React = _interopRequireWildcard(require("react"));

var _BaggageChecked = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/BaggageChecked"));

var _BaggagePersonalItem = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/BaggagePersonalItem"));

var _BaggageCabin = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/BaggageCabin"));

var _decimal = require("decimal.js");

var _index = _interopRequireDefault(require("../../components/Translate/index"));

var _ref =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.select.personal_item"
});

var _ref2 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.select.cabin_bag"
});

var getTextFromCategory = function getTextFromCategory(category, transform) {
  switch (category) {
    case "personalItem":
      return _ref;

    case "cabinBag":
      return _ref2;

    case "holdBag":
      return React.createElement(_index.default, {
        t: "baggage_modal.select.checked_bag",
        transform: transform
      });

    default:
      return null;
  }
};

exports.getTextFromCategory = getTextFromCategory;

var getIconFromCategory = function getIconFromCategory(category, size, color) {
  switch (category) {
    case "personalItem":
      return React.createElement(_BaggagePersonalItem.default, {
        size: size,
        color: color
      });

    case "cabinBag":
      return React.createElement(_BaggageCabin.default, {
        size: size,
        color: color
      });

    case "holdBag":
      return React.createElement(_BaggageChecked.default, {
        size: size,
        color: color
      });

    default:
      return null;
  }
};

exports.getIconFromCategory = getIconFromCategory;

var getTotalPrice = function getTotalPrice(_ref3) {
  var combinationIndices = _ref3.combinationIndices,
      combinations = _ref3.combinations;
  var handBag = combinations.handBag,
      holdBag = combinations.holdBag;
  var holdBagsTotalPrice = combinationIndices.holdBag.reduce(function (acc, index) {
    return new _decimal.Decimal(holdBag[index].price.amount).plus(acc);
  }, 0);
  var handBagsTotalPrice = combinationIndices.handBag.reduce(function (acc, index) {
    return new _decimal.Decimal(handBag[index].price.amount).plus(acc);
  }, 0);
  var sum = new _decimal.Decimal(holdBagsTotalPrice).plus(handBagsTotalPrice).toFixed();
  return new _decimal.Decimal(sum).toNumber();
};

exports.getTotalPrice = getTotalPrice;

var getOptionItems = function getOptionItems(defs, indices) {
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
};

exports.getOptionItems = getOptionItems;

var getOptions = function getOptions(args) {
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
    return (// $FlowFixMe
      (0, _includes2.default)(passengerCategory, i.conditions.passengerGroups)
    );
  });
  var options = indexedCombinations.map(function (c) {
    return {
      originalIndex: c.originalIndex,
      pickerType: pickerType,
      price: c.price,
      items: getOptionItems(bagDefinitions, c.indices)
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
};

exports.getOptions = getOptions;