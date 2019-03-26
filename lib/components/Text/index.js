"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Translate = _interopRequireDefault(require("../Translate"));

/* eslint-disable react/no-danger */
var Text = function Text(_ref) {
  var t = _ref.t,
      values = _ref.values,
      html = _ref.html,
      transform = _ref.transform,
      orbit = (0, _objectWithoutProperties2.default)(_ref, ["t", "values", "html", "transform"]);
  return React.createElement(_Text.default, orbit, React.createElement(_Translate.default, {
    t: t,
    values: values,
    html: html,
    transform: transform
  }));
};

var _default = Text;
exports.default = _default;