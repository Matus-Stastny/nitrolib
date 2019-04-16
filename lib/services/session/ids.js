"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePageViewId = exports.makeSessionId = exports.makeUserId = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

var makeUserId = function makeUserId() {
  return (0, _v.default)();
};

exports.makeUserId = makeUserId;

var makeSessionId = function makeSessionId() {
  return (0, _v.default)().substring(0, 8);
};

exports.makeSessionId = makeSessionId;

var makePageViewId = function makePageViewId() {
  return (0, _v.default)().substring(0, 8);
};

exports.makePageViewId = makePageViewId;