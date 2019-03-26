"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CountryFlag = _interopRequireDefault(require("@kiwicom/orbit-components/lib/CountryFlag"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _Languages = require("../../../records/Languages");

var _Theme = require("../../../records/Theme");

var LanguageNameText = _styledComponents.default.span.withConfig({
  displayName: "LanguageName__LanguageNameText",
  componentId: "h2b7ff-0"
})(["margin-", ":10px;font-size:", ";font-weight:", ";letter-spacing:0.02em;white-space:nowrap;"],
/* sc-custom "left" */
_rtl.left, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.fontSizeTextSmall;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.fontWeightMedium;
});

LanguageNameText.defaultProps = {
  theme: _Theme.themeDefault
};

var Container = _styledComponents.default.div.withConfig({
  displayName: "LanguageName__Container",
  componentId: "h2b7ff-1"
})(["display:flex;align-items:center;"]);

var LanguageNameTextThicc = (0, _styledComponents.default)(LanguageNameText).withConfig({
  displayName: "LanguageName__LanguageNameTextThicc",
  componentId: "h2b7ff-2"
})(["font-weight:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.fontWeightBold;
});
LanguageNameTextThicc.defaultProps = {
  theme: _Theme.themeDefault
};
var LanguageNameTextLean = (0, _styledComponents.default)(LanguageNameText).withConfig({
  displayName: "LanguageName__LanguageNameTextLean",
  componentId: "h2b7ff-3"
})(["font-weight:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.fontWeightNormal;
});
LanguageNameTextLean.defaultProps = {
  theme: _Theme.themeDefault
};

var LanguageName = function LanguageName(_ref5) {
  var language = _ref5.language;

  var _getNames = (0, _Languages.getNames)(language),
      primary = _getNames.primary,
      secondary = _getNames.secondary;

  return React.createElement(Container, null, React.createElement(_CountryFlag.default, {
    code: language.flag,
    name: "".concat(primary, " ").concat(secondary)
  }), React.createElement(LanguageNameTextThicc, null, primary), React.createElement(LanguageNameTextLean, null, secondary));
};

var _default = LanguageName;
exports.default = _default;