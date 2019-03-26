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

var Link = _styledComponents.default.a.withConfig({
  displayName: "MenuItem__Link",
  componentId: "sc-16ph38z-0"
})(["display:flex;align-items:center;color:", ";text-decoration:none;&:link,&:visited{color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteInkNormal;
});

Link.defaultProps = {
  theme: _Theme.themeDefault
};

var Container = _styledComponents.default.div.withConfig({
  displayName: "MenuItem__Container",
  componentId: "sc-16ph38z-1"
})(["color:", ";margin-top:10px;cursor:pointer;.menuIcon{color:", ";width:16px;height:16px;margin-", ":10px;}&:hover{", "{color:", ";}.menuIcon{color:", ";}}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.paletteInkNormal;
},
/* sc-custom "right" */
_rtl.right, Link, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.paletteProductNormal;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.orbit.paletteProductNormal;
});

Container.defaultProps = {
  theme: _Theme.themeDefault
};

var Item = _styledComponents.default.span.withConfig({
  displayName: "MenuItem__Item",
  componentId: "sc-16ph38z-2"
})(["line-height:20px;"]);

var MenuItem = function MenuItem(_ref7) {
  var onClick = _ref7.onClick,
      Icon = _ref7.Icon,
      text = _ref7.text,
      link = _ref7.link;
  return React.createElement(Container, {
    onClick: onClick
  }, link !== "" ? React.createElement(Link, {
    href: link,
    itemProp: "url"
  }, React.createElement(Icon, {
    className: "menuIcon"
  }), React.createElement(Item, {
    itemProp: "name"
  }, text)) : React.createElement(Link, null, React.createElement(Icon, {
    className: "menuIcon"
  }), React.createElement(Item, {
    itemProp: "name"
  }, text)));
};

MenuItem.defaultProps = {
  link: ""
};
var _default = MenuItem;
exports.default = _default;