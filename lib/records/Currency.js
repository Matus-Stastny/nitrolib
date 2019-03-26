"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MOST_USED_CURRENCIES = exports.currencyDefault = exports.getAvailableList = exports.format = exports.convert = exports.getSymbol = exports.getCode = void 0;

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var _prop2 = _interopRequireDefault(require("ramda/src/prop"));

var _sortBy2 = _interopRequireDefault(require("ramda/src/sortBy"));

var _compose2 = _interopRequireDefault(require("ramda/src/compose"));

var getCode = function getCode(code) {
  return code.toUpperCase();
};

exports.getCode = getCode;

var getSymbol = function getSymbol(format) {
  return format.replace("__price__", "").trim();
};

exports.getSymbol = getSymbol;

var convert = function convert(currency, eur) {
  var amount = eur / currency.rate;
  return Number(amount.toFixed(Number(currency.round)));
};

exports.convert = convert;

var format = function format(currency, price) {
  return currency.format.replace("__price__", String(convert(currency, price)));
};

exports.format = format;
var getAvailableList = (0, _compose2.default)((0, _sortBy2.default)((0, _prop2.default)("id")), _values2.default);
exports.getAvailableList = getAvailableList;
var currencyDefault = {
  id: "eur",
  name: "Euro",
  format: "__price__ €",
  uncertainFormat: false,
  round: "2",
  enabledOnAffilId: "",
  fallback: "",
  rate: 1
};
exports.currencyDefault = currencyDefault;
var MOST_USED_CURRENCIES = ["usd", "eur", "gbp", "aud", "sek", "dkk"];
exports.MOST_USED_CURRENCIES = MOST_USED_CURRENCIES;