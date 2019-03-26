"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Provider = exports.Consumer = void 0;

var React = _interopRequireWildcard(require("react"));

var _Session = require("../../records/Session");

var context = React.createContext(_Session.sessionDefault);
var Consumer = context.Consumer,
    Provider = context.Provider;
exports.Provider = Provider;
exports.Consumer = Consumer;
var _default = context;
exports.default = _default;