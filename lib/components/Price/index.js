"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _context = require("../../services/currency/context");

var _Currency = require("../../records/Currency");

var Price = function Price(_ref) {
  var value = _ref.value;
  return React.createElement(_context.Consumer, null, function (_ref2) {
    var currency = _ref2.currency;
    return (0, _Currency.format)(currency, value);
  });
};

var _default = Price;
exports.default = _default;