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

var BaggageSizeText = _styledComponents.default.p.withConfig({
  displayName: "OptionItem__BaggageSizeText",
  componentId: "sc-1lqc65f-0"
})(["display:", ";color:", ";line-height:24px;font-size:", ";font-family:", ";margin:0;", ";"], function (_ref) {
  var isMobile = _ref.isMobile;
  return isMobile ? "block" : "none";
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.colorTextSecondary;
}, function (_ref3) {
  var theme = _ref3.theme,
      isMobile = _ref3.isMobile;
  return isMobile ? theme.orbit.fontSizeTextSmall : theme.orbit.fontSizeTextNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.fontFamily;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["display:", ";"], function (_ref5) {
  var isMobile = _ref5.isMobile;
  return isMobile ? "none" : "block";
})));

BaggageSizeText.defaultProps = {
  theme: _Theme.themeDefault,
  isMobile: false
};

var Title = _styledComponents.default.span.withConfig({
  displayName: "OptionItem__Title",
  componentId: "sc-1lqc65f-1"
})(["line-height:24px;"]);

var _ref7 =
/*#__PURE__*/
React.createElement(_Text.default, {
  element: "span",
  weight: "bold",
  type: "secondary",
  dataTest: "BaggagePicker-OptionItem-Current"
}, React.createElement(_Translate.default, {
  t: "baggage_modal.select.current"
}));

var OptionItem = function OptionItem(_ref6) {
  var isFirstItem = _ref6.isFirstItem,
      amount = _ref6.amount,
      restrictions = _ref6.restrictions,
      category = _ref6.category,
      price = _ref6.price,
      isCurrentCombination = _ref6.isCurrentCombination;

  var getFirstItemInfo = function getFirstItemInfo(isCurrent, priceValue) {
    return isCurrent ? _ref7 : React.createElement(_Text.default, {
      element: "span",
      weight: "bold",
      dataTest: "BaggagePicker-OptionItem-Price"
    }, React.createElement(_Price.default, {
      value: priceValue
    }));
  };

  return React.createElement(_Stack.default, {
    flex: true,
    shrink: true,
    align: "start",
    dataTest: "BaggagePicker-OptionItem-".concat(category)
  }, React.createElement(_Stack.default, {
    inline: true,
    spacing: "condensed",
    mediumMobile: {
      shrink: true,
      inline: false
    }
  }, (0, _getIconFromCategory.default)(category, "medium", "primary"), React.createElement(_Stack.default, {
    inline: true,
    direction: "column",
    spacing: "none"
  }, React.createElement(_Text.default, {
    element: "p"
  }, React.createElement(Title, null, amount > 1 && React.createElement(_Text.default, {
    element: "span",
    weight: "bold"
  }, "".concat(amount, "\xD7 ")), category === "holdBag" && typeof restrictions.weight === "number" && "".concat(restrictions.weight, "kg "), (0, _getTextFromCategory.default)(category, function (x) {
    return x.toLowerCase();
  }))), React.createElement(BaggageSizeText, {
    isMobile: true
  }, (0, _getBaggageSize.default)(restrictions)))), React.createElement(_Stack.default, {
    inline: true,
    justify: "end",
    largeMobile: {
      justify: "between",
      shrink: true,
      basis: "100%"
    }
  }, React.createElement(BaggageSizeText, null, (0, _getBaggageSize.default)(restrictions)), React.createElement(Title, null, isFirstItem && getFirstItemInfo(isCurrentCombination, price.amount))));
};

var _default = OptionItem;
exports.default = _default;