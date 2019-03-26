"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var marginMixin = (0, _styledComponents.css)(["margin-", ":5px;&:first-child{margin-", ":5px;}", ";"],
/* sc-custom "left" */
_rtl.left,
/* sc-custom "left" */
_rtl.left, _mediaQuery.default.tablet((0, _styledComponents.css)(["margin-", ":16px;&:first-child{margin-", ":0;}"],
/* sc-custom "left" */
_rtl.left,
/* sc-custom "left" */
_rtl.left)));
var _default = marginMixin;
exports.default = _default;