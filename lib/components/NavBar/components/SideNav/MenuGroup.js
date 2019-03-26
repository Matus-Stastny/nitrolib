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

var _Theme = require("../../../../records/Theme");

var Menu = _styledComponents.default.div.withConfig({
  displayName: "MenuGroup__Menu",
  componentId: "sc-1cqnpbj-0"
})(["padding-", ":35px;"],
/* sc-custom "left" */
_rtl.left);

Menu.defaultProps = {
  theme: _Theme.themeDefault
};

var Title = _styledComponents.default.span.withConfig({
  displayName: "MenuGroup__Title",
  componentId: "sc-1cqnpbj-1"
})(["color:", ";font-size:", ";text-transform:uppercase;line-height:16px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.fontSizeTextSmall;
});

Title.defaultProps = {
  theme: _Theme.themeDefault
};

var MenuGroup = function MenuGroup(_ref3) {
  var text = _ref3.text,
      children = _ref3.children;
  return React.createElement(Menu, {
    itemScope: true,
    itemType: "http://www.schema.org/SiteNavigationElement"
  }, text && React.createElement(Title, null, text), children);
};

var _default = MenuGroup;
exports.default = _default;