"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _Theme = require("../../records/Theme");

var Container = _styledComponents.default.div.withConfig({
  displayName: "IconText__Container",
  componentId: "sc-1qj4oem-0"
})(["position:relative;display:flex;align-items:center;"]);

Container.defaultProps = {
  theme: _Theme.themeDefault
};

var IconWrapper = _styledComponents.default.div.withConfig({
  displayName: "IconText__IconWrapper",
  componentId: "sc-1qj4oem-1"
})(["display:flex;align-items:center;padding-", ":10px;"],
/* sc-custom "right" */
_rtl.right);

var Text = _styledComponents.default.span.withConfig({
  displayName: "IconText__Text",
  componentId: "sc-1qj4oem-2"
})(["font-size:", ";height:24px;line-height:24px;white-space:nowrap;"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.fontSizeTextNormal;
});

Text.defaultProps = {
  theme: _Theme.themeDefault
};

var IconText = function IconText(_ref2) {
  var icon = _ref2.icon,
      children = _ref2.children;
  return React.createElement(Container, null, React.createElement(IconWrapper, null, icon), React.createElement(Text, null, children));
};

var _default = IconText;
exports.default = _default;