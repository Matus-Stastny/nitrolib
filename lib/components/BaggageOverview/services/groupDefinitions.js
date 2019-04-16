"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupDefinitions;

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

function groupDefinitions(definitions) {
  var groupedDefinitions = definitions.reduce(function (acc, def) {
    if (acc[def.id]) {
      acc[def.id].amount += 1;
    } else {
      acc[def.id] = (0, _objectSpread2.default)({
        amount: 1
      }, def);
    }

    return acc;
  }, {});
  return (0, _values2.default)(groupedDefinitions);
}