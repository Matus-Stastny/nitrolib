"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleIsCurrentFlag;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function handleIsCurrentFlag(definitions, commonDefIndices) {
  var memo = (0, _toConsumableArray2.default)(commonDefIndices);
  return definitions.reduce(function (acc, def) {
    if (memo.some(function (i) {
      return i === def.originalIndex;
    })) {
      def.isCurrent = true; // eslint-disable-line

      memo.splice(memo.findIndex(function (i) {
        return i === def.originalIndex;
      }), 1); // eslint-disable-line
    } // $FlowExpected: Union types issue


    return acc.concat(def);
  }, []);
}