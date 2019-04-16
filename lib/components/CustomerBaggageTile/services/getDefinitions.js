"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDefinitions;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _intersection2 = _interopRequireDefault(require("ramda/src/intersection"));

var _handleIsCurrentFlag = _interopRequireDefault(require("./handleIsCurrentFlag"));

var _filterNewDefinitions = _interopRequireDefault(require("./filterNewDefinitions"));

function getDefinitions(_ref) {
  var current = _ref.current,
      selected = _ref.selected,
      baggage = _ref.baggage,
      bagType = _ref.bagType,
      newDefinitions = _ref.newDefinitions;
  var definitions = baggage.definitions,
      combinations = baggage.combinations;
  var currentCombination = current && current[bagType];
  var selectedCombination = selected && selected[bagType];

  if (typeof selectedCombination === "number" && typeof currentCombination === "number") {
    var currentIndices = combinations[bagType][currentCombination].indices;
    var selectedIndices = combinations[bagType][selectedCombination].indices;
    var newDefinitionsIndices = (0, _intersection2.default)(selectedIndices, currentIndices);
    var selectedDef = selectedIndices.map(function (index) {
      // $FlowIssue: https://github.com/facebook/flow/issues/2892
      return (0, _objectSpread2.default)({
        originalIndex: index,
        isCurrent: false
      }, definitions[bagType][index]);
    });
    return (0, _handleIsCurrentFlag.default)(selectedDef, newDefinitionsIndices);
  }

  return (0, _filterNewDefinitions.default)(newDefinitions, bagType);
}