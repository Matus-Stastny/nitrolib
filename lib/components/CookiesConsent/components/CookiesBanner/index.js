"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _close = _interopRequireDefault(require("react-icons/lib/md/close"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _link = _interopRequireDefault(require("../../../../styles/mixins/link"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _Theme = require("../../../../records/Theme");

var Container = _styledComponents.default.div.withConfig({
  displayName: "CookiesBanner__Container",
  componentId: "sc-31779s-0"
})(["position:relative;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;width:100%;z-index:600;padding:", ";font-size:", ";line-height:20px;background:", ";color:", ";transition:bottom 0.25s ease-in;box-shadow:0 -1px 6px 0 rgba(0,0,0,0.2);", ";"], (0, _rtl.rtlSpacing)("10px 50px 10px 20px"), function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.fontSizeTextSmall;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteInkDark;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.paletteWhite;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["padding:", ";color:", ";background:", ";"], (0, _rtl.rtlSpacing)("20px 50px 20px 20px"), function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.paletteInkNormalActive;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.paletteWhite;
})));

Container.defaultProps = {
  theme: _Theme.themeDefault
};

var Message = _styledComponents.default.p.withConfig({
  displayName: "CookiesBanner__Message",
  componentId: "sc-31779s-1"
})(["", ";line-height:16px;", ";"], _link.default, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["line-height:20px;"])));

Message.defaultProps = {
  theme: _Theme.themeDefault
};

var AcceptButton = _styledComponents.default.a.withConfig({
  displayName: "CookiesBanner__AcceptButton",
  componentId: "sc-31779s-2"
})(["position:absolute;top:0;", ":0;padding:10px;cursor:pointer;"], _rtl.right);

AcceptButton.defaultProps = {
  theme: _Theme.themeDefault
};
var Close = (0, _styledComponents.default)(_close.default).withConfig({
  displayName: "CookiesBanner__Close",
  componentId: "sc-31779s-3"
})(["height:20px;width:20px;"]);

var _ref7 =
/*#__PURE__*/
React.createElement(Message, null, React.createElement(_Translate.default, {
  t: "content.cookies.banner.text",
  html: true
}));

var _ref8 =
/*#__PURE__*/
React.createElement(Close, null);

var CookiesBanner = function CookiesBanner(_ref6) {
  var onAccept = _ref6.onAccept;
  return React.createElement(Container, null, _ref7, React.createElement(AcceptButton, {
    onClick: onAccept
  }, _ref8));
};

var _default = CookiesBanner;
exports.default = _default;