"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Provider = exports.Consumer = void 0;

var React = _interopRequireWildcard(require("react"));

var _environment = _interopRequireDefault(require("../environment"));

var contextDefault = {
  auth: null,
  loading: false,
  environment: _environment.default,
  onMyBooking: function onMyBooking() {
    return Promise.resolve();
  },
  onRegister: function onRegister() {
    return Promise.resolve();
  },
  onSocialAuth: function onSocialAuth() {
    return Promise.resolve();
  },
  onSignIn: function onSignIn() {
    return Promise.resolve();
  },
  onSignOut: function onSignOut() {}
};
var context = React.createContext(contextDefault);
var Consumer = context.Consumer,
    Provider = context.Provider;
exports.Provider = Provider;
exports.Consumer = Consumer;
var _default = context;
exports.default = _default;