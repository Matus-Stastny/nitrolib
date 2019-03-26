"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Provider = exports.Consumer = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var React = _interopRequireWildcard(require("react"));

var _Intl = require("../../records/Intl");

var context = React.createContext((0, _objectSpread2.default)({}, _Intl.intlDefault, {
  onDebug: function onDebug() {}
}));
var Consumer = context.Consumer,
    Provider = context.Provider;
exports.Provider = Provider;
exports.Consumer = Consumer;
var _default = context;
exports.default = _default;