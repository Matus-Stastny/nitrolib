"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _equals2 = _interopRequireDefault(require("ramda/src/equals"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _intersection2 = _interopRequireDefault(require("ramda/src/intersection"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tile = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Tile"));

var _Title = _interopRequireDefault(require("./components/Title"));

var _Content = _interopRequireDefault(require("./components/Content"));

var _utils = require("../../services/baggage/utils");

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "CustomerBaggageTile__Wrapper",
  componentId: "sc-5w7tfx-0"
})(["div:last-child > svg{display:", ";}"], function (_ref) {
  var isIconShown = _ref.isIconShown;
  return isIconShown ? "inline" : "none";
});

var CustomerBaggageTile = function CustomerBaggageTile(_ref2) {
  var firstName = _ref2.firstName,
      middleName = _ref2.middleName,
      lastName = _ref2.lastName,
      gender = _ref2.gender,
      dayOfBirth = _ref2.dayOfBirth,
      isProcessing = _ref2.isProcessing,
      current = _ref2.current,
      selected = _ref2.selected,
      newDefinitions = _ref2.definitions,
      onClick = _ref2.onClick,
      baggage = _ref2.baggage;
  var definitions = baggage.definitions,
      combinations = baggage.combinations;

  var handleIsCurrentFlag = function handleIsCurrentFlag(defs, commonDefIndices) {
    var memo = (0, _toConsumableArray2.default)(commonDefIndices);
    return defs.reduce(function (acc, def) {
      if (memo.some(function (i) {
        return i === def.originalIndex;
      })) {
        def.isCurrent = true; // eslint-disable-line

        memo.splice(memo.findIndex(function (i) {
          return i === def.originalIndex;
        }), 1); // eslint-disable-line
      } // $FlowFixMe


      return acc.concat(def);
    }, []);
  };

  var filterNewDefinitions = function filterNewDefinitions(bagType) {
    if (newDefinitions) {
      return newDefinitions.filter(function (def) {
        if (bagType === "handBag") {
          return def.category === "cabinBag" || def.category === "personalItem";
        }

        return def.category === "holdBag";
      });
    }

    return [];
  };

  var getDefinitions = function getDefinitions(bagType) {
    var currentCombination = current && current[bagType];
    var selectedCombination = selected && selected[bagType];

    if (typeof selectedCombination === "number" && typeof currentCombination === "number") {
      var currentIndices = combinations[bagType][currentCombination].indices;
      var selectedIndices = combinations[bagType][selectedCombination].indices;
      var newDefinitionsIndices = (0, _intersection2.default)(selectedIndices, currentIndices);
      var selectedDef = selectedIndices.map(function (index) {
        return (0, _objectSpread2.default)({
          originalIndex: index,
          isCurrent: false
        }, definitions[bagType][index]);
      });
      return handleIsCurrentFlag(selectedDef, newDefinitionsIndices);
    }

    return filterNewDefinitions(bagType) || [];
  };

  var calculatePrice = function calculatePrice() {
    if (selected && current) {
      return (0, _utils.getTotalPrice)({
        combinationIndices: {
          handBag: [selected.handBag],
          holdBag: [selected.holdBag]
        },
        combinations: combinations
      }) - (0, _utils.getTotalPrice)({
        combinationIndices: {
          handBag: [current.handBag],
          holdBag: [current.holdBag]
        },
        combinations: combinations
      });
    }

    return null;
  };

  var getStatus = function getStatus() {
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
  };

  var handBag = getDefinitions("handBag");
  var holdBag = getDefinitions("holdBag");
  return React.createElement(Wrapper, {
    isIconShown: !!onClick
  }, React.createElement(_Tile.default, {
    dataTest: "CustomerBaggageTile",
    onClick: onClick && onClick,
    title: React.createElement(_Title.default, {
      gender: gender,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      orderStatus: getStatus(),
      price: calculatePrice(),
      dayOfBirth: dayOfBirth
    }),
    description: React.createElement(_Content.default, {
      definitions: [].concat((0, _toConsumableArray2.default)(handBag), (0, _toConsumableArray2.default)(holdBag)),
      orderStatus: getStatus()
    })
  }));
};

var _default = CustomerBaggageTile;
exports.default = _default;