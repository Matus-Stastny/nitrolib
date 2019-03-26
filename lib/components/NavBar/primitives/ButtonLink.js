"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Theme = require("../../../records/Theme");

var _Button = _interopRequireDefault(require("./Button"));

// $FlowExpected: TODO describe
var ButtonLink = (0, _styledComponents.default)(_Button.default).withConfig({
  displayName: "ButtonLink",
  componentId: "sc-1csbsbx-0"
})([""]);
ButtonLink.defaultProps = {
  as: "a",
  theme: _Theme.themeDefault
};
var _default = ButtonLink;
exports.default = _default;