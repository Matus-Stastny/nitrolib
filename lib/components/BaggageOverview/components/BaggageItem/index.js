"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _TextLink = _interopRequireDefault(require("@kiwicom/orbit-components/lib/TextLink"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _AccountCircle = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/AccountCircle"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _Theme = require("../../../../records/Theme");

var _getBaggageSize = _interopRequireDefault(require("../../../../services/baggage/getBaggageSize"));

var _getIconFromCategory = _interopRequireDefault(require("../../../../services/baggage/getIconFromCategory"));

var _getTextFromCategory = _interopRequireDefault(require("../../../../services/baggage/getTextFromCategory"));

var _getPassengerNames = _interopRequireDefault(require("./services/getPassengerNames"));

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "BaggageItem__Wrapper",
  componentId: "sc-19toj4x-0"
})(["display:flex;flex-direction:column;align-items:center;margin-bottom:20px;", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["flex-direction:row;align-items:flex-start;margin-bottom:0px;"])));

var TextWrapper = _styledComponents.default.div.withConfig({
  displayName: "BaggageItem__TextWrapper",
  componentId: "sc-19toj4x-1"
})(["display:flex;width:100%;flex-wrap:nowrap;flex-grow:1;flex-shrink:1;justify-content:flex-start;flex-direction:column;align-items:flex-start;", ";", ";> p,> span{margin-right:", ";}"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["flex-direction:column;align-items:flex-start;"])), _mediaQuery.default.largeMobile((0, _styledComponents.css)(["flex-direction:row;align-items:center;"])), function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceXSmall;
});

TextWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var Title = _styledComponents.default.span.withConfig({
  displayName: "BaggageItem__Title",
  componentId: "sc-19toj4x-2"
})(["line-height:24px;"]);

var OptionalColumnWrapper = _styledComponents.default.div.withConfig({
  displayName: "BaggageItem__OptionalColumnWrapper",
  componentId: "sc-19toj4x-3"
})(["display:flex;width:100%;align-items:center;span,a{line-height:24px;}a{margin-left:28px;}svg{margin-left:3px;margin-right:11px;}", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["justify-content:", ";svg{margin-right:", ";}"], function (_ref2) {
  var hasLink = _ref2.hasLink;
  return hasLink ? "flex-end" : "flex-start";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.spaceXSmall;
})));

OptionalColumnWrapper.defaultProps = {
  theme: _Theme.themeDefault,
  hasLink: false
};

var _ref5 =
/*#__PURE__*/
React.createElement(_AccountCircle.default, {
  size: "small",
  color: "secondary"
});

var _ref6 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "baggage_modal.summary.more_info"
});

var BaggageItem = function BaggageItem(_ref4) {
  var passengers = _ref4.passengers,
      category = _ref4.category,
      context = _ref4.context,
      amount = _ref4.amount,
      restrictions = _ref4.restrictions,
      FAQLinksHandler = _ref4.FAQLinksHandler;
  return React.createElement(Wrapper, {
    "data-test": "BaggageOverview-BaggageItem-".concat(category)
  }, React.createElement(_Stack.default, {
    shrink: true,
    spacing: "condensed"
  }, (0, _getIconFromCategory.default)(category, "medium", "primary"), React.createElement(TextWrapper, null, React.createElement(_Text.default, {
    element: "p",
    weight: context === "MMB-PassengersSummary" ? "bold" : "normal",
    size: context === "MMB-PassengersSummary" ? "large" : "normal"
  }, React.createElement(Title, null, "".concat(amount, "\xD7 "), category === "holdBag" && "".concat(restrictions.weight, "kg  "), (0, _getTextFromCategory.default)(category, function (x) {
    return x.toLowerCase();
  }))), React.createElement(Title, null, React.createElement(_Text.default, {
    element: "span",
    type: "secondary",
    size: context === "MMB-PassengersSummary" ? "normal" : "small"
  }, (0, _getBaggageSize.default)(restrictions))))), React.createElement(OptionalColumnWrapper, {
    hasLink: !!FAQLinksHandler
  }, passengers && React.createElement(React.Fragment, null, _ref5, React.createElement(_Text.default, {
    element: "span",
    type: "secondary"
  }, (0, _getPassengerNames.default)(passengers))), FAQLinksHandler && React.createElement(_TextLink.default, {
    size: "small",
    onClick: function onClick() {
      return FAQLinksHandler(category);
    }
  }, _ref6)));
};

var _default = BaggageItem;
exports.default = _default;