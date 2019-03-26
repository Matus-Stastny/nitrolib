"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _Translate = _interopRequireDefault(require("../Translate"));

var Button = function Button(_ref) {
  var t = _ref.t,
      values = _ref.values,
      html = _ref.html,
      transform = _ref.transform,
      orbit = (0, _objectWithoutProperties2.default)(_ref, ["t", "values", "html", "transform"]);
  return React.createElement(_Button.default, orbit, React.createElement(_Translate.default, {
    t: t,
    values: values,
    html: html,
    transform: transform
  }));
};

var _default = Button;
exports.default = _default;