"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _take2 = _interopRequireDefault(require("ramda/src/take"));

var _filter2 = _interopRequireDefault(require("ramda/src/filter"));

var _map2 = _interopRequireDefault(require("ramda/src/map"));

var _uniq2 = _interopRequireDefault(require("ramda/src/uniq"));

var _pipe2 = _interopRequireDefault(require("ramda/src/pipe"));

var MAX_RECOMMENDED_CURRENCIES = 4;

var getRecommended = function getRecommended(countryCurrency, languageCurrency, mostUsed, available) {
  return (0, _pipe2.default)(_uniq2.default, (0, _map2.default)(function (c) {
    return available[c];
  }), (0, _filter2.default)(Boolean), (0, _take2.default)(MAX_RECOMMENDED_CURRENCIES))([countryCurrency || "", languageCurrency || ""].concat((0, _toConsumableArray2.default)(mostUsed)));
};

var _default = getRecommended;
exports.default = _default;