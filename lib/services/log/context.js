"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Provider = exports.Consumer = void 0;

var React = _interopRequireWildcard(require("react"));

var contextDefault = {
  // Removed on purpose:
  // ev => console.log("%cNITROLOG", "color: green", ev), // eslint-disable-line no-console
  log: function log() {}
};
var context = React.createContext(contextDefault);
var Consumer = context.Consumer,
    Provider = context.Provider;
exports.Provider = Provider;
exports.Consumer = Consumer;
var _default = context;
exports.default = _default;