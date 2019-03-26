"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getCurrencies = function getCurrencies() {
  return fetch("https://nitro-hankey.skypicker.com/currencies").then(function (res) {
    return res.json();
  });
};

var _default = getCurrencies;
exports.default = _default;