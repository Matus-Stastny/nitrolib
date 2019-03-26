"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Provider = exports.Consumer = void 0;

var React = _interopRequireWildcard(require("react"));

var _Currency = require("../../records/Currency");

var contextDefault = {
  currency: _Currency.currencyDefault,
  available: {},
  recommended: [],
  onChange: function onChange() {}
};
var context = React.createContext(contextDefault);
var Consumer = context.Consumer,
    Provider = context.Provider;
exports.Provider = Provider;
exports.Consumer = Consumer;
var _default = context;
exports.default = _default;