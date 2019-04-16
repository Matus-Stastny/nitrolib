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

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Theme = require("../../../../records/Theme");

var _getBaggageSize = _interopRequireDefault(require("../../../../services/baggage/getBaggageSize"));

var _getTextFromCategory = _interopRequireDefault(require("../../../../services/baggage/getTextFromCategory"));

var _getIconFromCategory = _interopRequireDefault(require("../../../../services/baggage/getIconFromCategory"));

var _Price = _interopRequireDefault(require("../../../Price"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var TitleWrapper = _styledComponents.default.div.withConfig({
  displayName: "OptionItem__TitleWrapper",
  componentId: "sc-1lqc65f-0"
})(["display:flex;width:100%;flex-direction:column;flex-wrap:nowrap;flex-grow:1;flex-shrink:1;justify-content:flex-start;align-content:center;> p{margin-right:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceXSmall;
});

TitleWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var IconWrapper = _styledComponents.default.div.withConfig({
  displayName: "OptionItem__IconWrapper",
  componentId: "sc-1lqc65f-1"
})(["padding-bottom:4px;"]);

var BaggageSizeText = _styledComponents.default.p.withConfig({
  displayName: "OptionItem__BaggageSizeText",
  componentId: "sc-1lqc65f-2"
})(["display:", ";color:", ";font-size:", ";font-family:", ";margin:0;", ";"], function (_ref2) {
  var isMobile = _ref2.isMobile;
  return isMobile ? "block" : "none";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.colorTextSecondary;
}, function (_ref4) {
  var theme = _ref4.theme,
      isMobile = _ref4.isMobile;
  return isMobile ? theme.orbit.fontSizeTextSmall : theme.orbit.fontSizeTextNormal;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.fontFamily;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["display:", ";"], function (_ref6) {
  var isMobile = _ref6.isMobile;
  return isMobile ? "none" : "block";
})));

BaggageSizeText.defaultProps = {
  theme: _Theme.themeDefault,
  isMobile: false
};

var Title = _styledComponents.default.span.withConfig({
  displayName: "OptionItem__Title",
  componentId: "sc-1lqc65f-3"
})(["line-height:24px;"]);

var BaggageInfoWrapper = _styledComponents.default.div.withConfig({
  displayName: "OptionItem__BaggageInfoWrapper",
  componentId: "sc-1lqc65f-4"
})(["display:flex;justify-content:flex-end;width:50%;line-height:24px;", ";"], _mediaQuery.default.largeMobile((0, _styledComponents.css)(["width:100%;justify-content:space-between;align-items:center;"])));

var _ref8 =
/*#__PURE__*/
React.createElement(_Text.default, {
  element: "span",
  weight: "bold",
  type: "secondary"
}, React.createElement(_Translate.default, {
  t: "baggage_modal.select.current"
}));

var OptionItem = function OptionItem(_ref7) {
  var isFirstItem = _ref7.isFirstItem,
      amount = _ref7.amount,
      restrictions = _ref7.restrictions,
      category = _ref7.category,
      price = _ref7.price,
      isCurrentCombination = _ref7.isCurrentCombination;

  var getFirstItemInfo = function getFirstItemInfo(isCurrent, priceValue) {
    return isCurrent ? _ref8 : React.createElement(_Text.default, {
      element: "span",
      weight: "bold"
    }, React.createElement(_Price.default, {
      value: priceValue
    }));
  };

  return React.createElement(_Stack.default, {
    shrink: true,
    align: "start",
    dataTest: "BaggagePicker-OptionItem-".concat(category)
  }, React.createElement(_Stack.default, {
    shrink: true,
    spacing: "condensed"
  }, React.createElement(IconWrapper, null, (0, _getIconFromCategory.default)(category, "medium", "primary")), React.createElement(TitleWrapper, null, React.createElement(_Text.default, {
    element: "p"
  }, React.createElement(Title, null, amount > 1 && React.createElement(_Text.default, {
    element: "span",
    weight: "bold"
  }, "".concat(amount, "\xD7 ")), category === "holdBag" && "".concat(restrictions.weight, "kg"), " ", (0, _getTextFromCategory.default)(category, function (x) {
    return x.toLowerCase();
  }))), React.createElement(BaggageSizeText, {
    isMobile: true
  }, (0, _getBaggageSize.default)(restrictions)))), React.createElement(BaggageInfoWrapper, null, React.createElement(BaggageSizeText, null, (0, _getBaggageSize.default)(restrictions)), isFirstItem && getFirstItemInfo(isCurrentCombination, price.amount)));
};

var _default = OptionItem;
exports.default = _default;