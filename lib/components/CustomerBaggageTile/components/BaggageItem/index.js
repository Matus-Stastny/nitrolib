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

var _utils = require("../../../../services/baggage/utils");

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

var Wrapper = _styledComponents.default.div.attrs({
  "data-test": "CustomerBaggageTile-BaggageItem"
}).withConfig({
  displayName: "BaggageItem__Wrapper",
  componentId: "sc-1cqzr3x-2"
})(["width:100%;display:flex;align-items:center;"]);

var BaggageItem = function BaggageItem(_ref7) {
  var category = _ref7.category,
      restrictions = _ref7.restrictions,
      isCurrent = _ref7.isCurrent,
      orderStatus = _ref7.orderStatus;
  var textWeight = isCurrent || orderStatus === null || orderStatus === "notAvailable" ? "normal" : "bold";

  var getBaggageSize = function getBaggageSize(_ref8) {
    var height = _ref8.height,
        length = _ref8.length,
        weight = _ref8.weight,
        width = _ref8.width;
    return "".concat(length, " x ").concat(width, " x ").concat(height, " cm, ").concat(weight, " kg");
  };

  return React.createElement(Wrapper, null, React.createElement(_Stack.default, {
    shrink: true,
    spacing: "tight",
    direction: "column"
  }, React.createElement(_Stack.default, {
    grow: true,
    flex: true,
    align: "center",
    spacing: "condensed"
  }, (0, _utils.getIconFromCategory)(category, "small", "primary"), React.createElement(_Text.default, {
    element: "span",
    weight: textWeight
  }, "".concat(restrictions.weight, "kg "), (0, _utils.getTextFromCategory)(category))), React.createElement(BaggageRestrictions, {
    isMobile: true
  }, getBaggageSize(restrictions))), React.createElement(BaggageRestrictionsWrapper, {
    shrink: true
  }, React.createElement(BaggageRestrictions, null, getBaggageSize(restrictions))));
};

var _default = BaggageItem;
exports.default = _default;