"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Heading = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Heading"));

var _index = _interopRequireDefault(require("../../../Translate/index"));

var SectionHeading = function SectionHeading(_ref) {
  var icon = _ref.icon,
      t = _ref.t;
  return React.createElement(_Stack.default, {
    direction: "row",
    spacing: "compact",
    spaceAfter: "large"
  }, icon, React.createElement(_Heading.default, {
    element: "h3",
    type: "title2"
  }, React.createElement(_index.default, {
    t: t
  })));
};

var _default = SectionHeading;
exports.default = _default;