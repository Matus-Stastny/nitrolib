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

var _TranslateNode = _interopRequireDefault(require("../TranslateNode"));

/* eslint-disable react/no-danger */
var TextNode = function TextNode(_ref) {
  var t = _ref.t,
      values = _ref.values,
      transform = _ref.transform,
      orbit = (0, _objectWithoutProperties2.default)(_ref, ["t", "values", "transform"]);
  return React.createElement(_Text.default, orbit, React.createElement(_TranslateNode.default, {
    t: t,
    values: values,
    transform: transform
  }));
};

var _default = TextNode;
exports.default = _default;