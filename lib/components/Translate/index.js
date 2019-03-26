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

/* eslint-disable react/no-danger */
var Translate = function Translate(_ref) {
  var t = _ref.t,
      values = _ref.values,
      html = _ref.html,
      transform = _ref.transform;
  return React.createElement(_context.Consumer, null, function (intl) {
    return html ? React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: transform(intl.translate(t, values))
      }
    }) : transform(intl.translate(t, values));
  });
};

Translate.defaultProps = {
  values: {},
  html: false,
  transform: _identity2.default
};
var _default = Translate;
exports.default = _default;