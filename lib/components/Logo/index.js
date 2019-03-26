"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Logo = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _styles = require("../../styles");

var _Theme = require("../../records/Theme");

var _SvgLogo = _interopRequireDefault(require("./SvgLogo"));

var PoweredByKiwi = _styledComponents.default.span.withConfig({
  displayName: "Logo__PoweredByKiwi",
  componentId: "sc-7qv1q8-0"
})(["color:", ";position:relative;font-size:10px;font-weight:", ";margin-", ":7px;padding-", ":7px;&:before{content:\"\";top:0;bottom:0;", ":0;margin:auto;position:absolute;width:2px;background:", ";height:30px;}", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteInkDark;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.fontWeightNormal;
},
/* sc-custom "left" */
_rtl.left,
/* sc-custom "left" */
_rtl.left,
/* sc-custom "left" */
_rtl.left, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.paletteInkLighter;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["font-size:", ";margin-", ":10px;padding-", ":10px;font-weight:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.fontSizeTextSmall;
},
/* sc-custom "left" */
_rtl.left,
/* sc-custom "left" */
_rtl.left, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.fontWeightMedium;
})));

PoweredByKiwi.defaultProps = {
  theme: _Theme.themeDefault
};

var LogoLinkStyled = _styledComponents.default.a.withConfig({
  displayName: "Logo__LogoLinkStyled",
  componentId: "sc-7qv1q8-1"
})(["display:flex;"]);

var LogoStyled = _styledComponents.default.img.withConfig({
  displayName: "Logo__LogoStyled",
  componentId: "sc-7qv1q8-2"
})(["display:none;", ";"], _mediaQuery.default.largeMobile((0, _styledComponents.css)(["display:block;max-height:35px;max-width:140px;align-self:center;"])));

var LogoStyledMobile = _styledComponents.default.img.withConfig({
  displayName: "Logo__LogoStyledMobile",
  componentId: "sc-7qv1q8-3"
})(["max-height:40px;max-width:40px;align-self:center;", ";"], _mediaQuery.default.largeMobile((0, _styledComponents.css)(["display:none;"])));

var Link = _styledComponents.default.a.withConfig({
  displayName: "Logo__Link",
  componentId: "sc-7qv1q8-4"
})(["display:flex;"]);

var logoBaseUrl = "https://images.kiwi.com/whitelabels";

var _ref7 =
/*#__PURE__*/
_react.default.createElement(PoweredByKiwi, null, "Powered by ", _react.default.createElement("br", null), " Kiwi.com");

var Logo = function Logo(_ref6) {
  var id = _ref6.id,
      redirectUrl = _ref6.redirectUrl,
      title = _ref6.title,
      poweredByKiwi = _ref6.poweredByKiwi,
      languageId = _ref6.languageId,
      inverted = _ref6.inverted,
      onClick = _ref6.onClick;
  return id === "kiwicom" ? _react.default.createElement(Link, {
    "data-test": "Logo",
    href: "".concat(redirectUrl).concat(languageId, "/"),
    onClick: onClick
  }, _react.default.createElement(_SvgLogo.default, {
    height: _styles.logo.height,
    width: _styles.logo.width,
    title: title,
    inverted: inverted
  })) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(LogoLinkStyled, {
    "data-test": "Logo",
    href: "".concat(redirectUrl).concat(languageId, "/"),
    onClick: onClick
  }, _react.default.createElement(LogoStyled, {
    title: title,
    alt: title,
    srcSet: "".concat(logoBaseUrl, "/0x80/").concat(id, ".png?v=1 2x"),
    src: "".concat(logoBaseUrl, "/0x40/").concat(id, ".png?v=1")
  }), _react.default.createElement(LogoStyledMobile, {
    title: title,
    alt: title,
    srcSet: "".concat(logoBaseUrl, "/0x80/").concat(id, "-mobile.png?v=1 2x"),
    src: "".concat(logoBaseUrl, "/0x40/").concat(id, "-mobile.png?v=1")
  })), poweredByKiwi && _ref7);
};

exports.Logo = Logo;
var _default = Logo;
exports.default = _default;