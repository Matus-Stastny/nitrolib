"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.save = exports.load = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var load = function load(key) {
  return _jsCookie.default.get(key);
};

exports.load = load;

var save = function save(key, value, opts) {
  _jsCookie.default.set(key, value, opts);
};

exports.save = save;

var remove = function remove(key, opts) {
  _jsCookie.default.remove(key, opts);
};

exports.remove = remove;