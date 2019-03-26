"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toLower2 = _interopRequireDefault(require("ramda/src/toLower"));

var _any2 = _interopRequireDefault(require("ramda/src/any"));

var _is2 = _interopRequireDefault(require("ramda/src/is"));

var _complement2 = _interopRequireDefault(require("ramda/src/complement"));

var _either2 = _interopRequireDefault(require("ramda/src/either"));

var _prop2 = _interopRequireDefault(require("ramda/src/prop"));

var _compose2 = _interopRequireDefault(require("ramda/src/compose"));

var _allPass2 = _interopRequireDefault(require("ramda/src/allPass"));

var _filter2 = _interopRequireDefault(require("ramda/src/filter"));

var _contains2 = _interopRequireDefault(require("ramda/src/contains"));

var _flip2 = _interopRequireDefault(require("ramda/src/flip"));

var isContainedStr = (0, _flip2.default)(_contains2.default);
var isContainedList = (0, _flip2.default)(_contains2.default);

var filterCurrencies = function filterCurrencies(affil, whitelist, currencies) {
  return (0, _filter2.default)((0, _allPass2.default)([(0, _compose2.default)(isContainedList(whitelist), (0, _prop2.default)("id")), (0, _compose2.default)((0, _either2.default)((0, _complement2.default)((0, _is2.default)(Array)), (0, _any2.default)(isContainedStr((0, _toLower2.default)(affil)))), (0, _prop2.default)("enabledOnAffilId"))]), currencies);
};

var _default = filterCurrencies;
exports.default = _default;