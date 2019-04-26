"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _getIconFromCategory = _interopRequireDefault(require("../../../../services/baggage/getIconFromCategory"));

var _getTextFromCategory = _interopRequireDefault(require("../../../../services/baggage/getTextFromCategory"));

var _getBaggageSize = _interopRequireDefault(require("../../../../services/baggage/getBaggageSize"));

var _Theme = require("../../../../records/Theme");

var BaggageRestrictionsWrapper = _styledComponents.default.div.withConfig({
  displayName: "BaggageItem__BaggageRestrictionsWrapper",
  componentId: "sc-1cqzr3x-0"
})(["display:none;", ";", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["display:flex;width:80%;"])), _mediaQuery.default.largeMobile((0, _styledComponents.css)(["display:flex;width:100%;"])));

var BaggageRestrictions = _styledComponents.default.span.withConfig({
  displayName: "BaggageItem__BaggageRestrictions",
  componentId: "sc-1cqzr3x-1"
})(["display:", ";padding-left:", ";color:", ";font-size:", ";font-family:", ";", ";"], function (_ref) {
  var isMobile = _ref.isMobile;
  return isMobile ? "inline-block" : "none";
}, function (_ref2) {
  var isMobile = _ref2.isMobile;
  return isMobile ? "24px" : "0px";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.colorTextSecondary;
}, function (_ref4) {
  var theme = _ref4.theme,
      isMobile = _ref4.isMobile;
  return isMobile ? theme.orbit.fontSizeTextNormal : "inherit";
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.fontFamily;
}, _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["display:", ";"], function (_ref6) {
  var isMobile = _ref6.isMobile;
  return isMobile ? "none" : "block";
})));

BaggageRestrictions.defaultProps = {
  theme: _Theme.themeDefault,
  isMobile: false
};

var BaggageItem = function BaggageItem(_ref7) {
  var category = _ref7.category,
      restrictions = _ref7.restrictions,
      isCurrent = _ref7.isCurrent,
      orderStatus = _ref7.orderStatus;
  var textWeight = isCurrent || orderStatus === null || orderStatus === "notAvailable" ? "normal" : "bold";
  return React.createElement(_Stack.default, {
    flex: true,
    direction: "row",
    align: "center",
    dataTest: "CustomerBaggageTile-BaggageItem"
  }, React.createElement(_Stack.default, {
    shrink: true,
    spacing: "tight",
    direction: "column"
  }, React.createElement(_Stack.default, {
    grow: true,
    flex: true,
    align: "center",
    spacing: "condensed"
  }, (0, _getIconFromCategory.default)(category, "small", "primary"), React.createElement(_Text.default, {
    element: "span",
    weight: textWeight
  }, typeof restrictions.weight === "number" && "".concat(restrictions.weight, "kg "), (0, _getTextFromCategory.default)(category))), React.createElement(BaggageRestrictions, {
    isMobile: true
  }, (0, _getBaggageSize.default)(restrictions))), React.createElement(BaggageRestrictionsWrapper, {
    shrink: true
  }, React.createElement(BaggageRestrictions, null, (0, _getBaggageSize.default)(restrictions))));
};

var _default = BaggageItem;
exports.default = _default;