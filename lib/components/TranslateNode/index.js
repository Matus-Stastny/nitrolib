"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _identity2 = _interopRequireDefault(require("ramda/src/identity"));

var React = _interopRequireWildcard(require("react"));

var _context = require("../../services/intl/context");

/* eslint-disable react/no-danger, react/no-array-index-key */
var TranslateNode = function TranslateNode(_ref) {
  var t = _ref.t,
      values = _ref.values,
      transform = _ref.transform;
  return React.createElement(_context.Consumer, null, function (intl) {
    return transform(intl.translate(t)).split("__").filter(Boolean).map(function (word, i) {
      return values[word] ? React.createElement("span", {
        key: i
      }, values[word]) : React.createElement("span", {
        key: i,
        dangerouslySetInnerHTML: {
          __html: word
        }
      });
    });
  });
};

TranslateNode.defaultProps = {
  transform: _identity2.default
};
var _default = TranslateNode;
exports.default = _default;