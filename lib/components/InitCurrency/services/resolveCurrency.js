"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keys2 = _interopRequireDefault(require("ramda/src/keys"));

var _identity2 = _interopRequireDefault(require("ramda/src/identity"));

var _sortBy2 = _interopRequireDefault(require("ramda/src/sortBy"));

var _head2 = _interopRequireDefault(require("ramda/src/head"));

var _Currency = require("../../../records/Currency");

function resolveCurrency(all, available, candidate) {
  if (available[candidate]) {
    return available[candidate];
  }

  if (all[candidate] && available[all[candidate].fallback]) {
    return available[all[candidate].fallback];
  }

  if (available[_Currency.currencyDefault.id]) {
    return available[_Currency.currencyDefault.id];
  }

  return available[(0, _head2.default)((0, _sortBy2.default)(_identity2.default, (0, _keys2.default)(available))) || ""];
}

var _default = resolveCurrency;
exports.default = _default;