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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _AccountCircle = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/AccountCircle"));

var _Hide = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Hide"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _getBaggageSize = _interopRequireDefault(require("../../../../services/baggage/getBaggageSize"));

var _getIconFromCategory = _interopRequireDefault(require("../../../../services/baggage/getIconFromCategory"));

var _getTextFromCategory = _interopRequireDefault(require("../../../../services/baggage/getTextFromCategory"));

var _getPassengerNames = _interopRequireDefault(require("./services/getPassengerNames"));

var CenteringFixWrapper = _styledComponents.default.div.withConfig({
  displayName: "BaggageItem__CenteringFixWrapper",
  componentId: "sc-19toj4x-0"
})(["> span,> p{line-height:24px;},> svg{margin-left:2px;}"]);

var _ref2 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "baggage_modal.summary.more_info"
});

var _ref3 =
/*#__PURE__*/
React.createElement(CenteringFixWrapper, null, React.createElement(_AccountCircle.default, {
  size: "small",
  color: "secondary"
}));

var _ref4 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "baggage_modal.summary.more_info"
});

var BaggageItem = function BaggageItem(_ref) {
  var passengers = _ref.passengers,
      category = _ref.category,
      context = _ref.context,
      amount = _ref.amount,
      restrictions = _ref.restrictions,
      FAQLinksHandler = _ref.FAQLinksHandler;
  return React.createElement(_Stack.default, {
    flex: true,
    align: "start",
    spaceAfter: "large",
    direction: "column",
    spacing: "tight",
    mediumMobile: {
      direction: "row",
      spaceAfter: "smallest",
      align: "start"
    },
    dataTest: "BaggageOverview-BaggageItem-".concat(category)
  }, React.createElement(_Stack.default, {
    shrink: true,
    spacing: "condensed"
  }, (0, _getIconFromCategory.default)(category, "medium", "primary"), React.createElement(_Stack.default, {
    flex: true,
    shrink: true,
    align: "start",
    spacing: "none",
    direction: "column",
    mediumMobile: {
      align: "start",
      direction: "column"
    },
    largeMobile: {
      direction: "row",
      spacing: "condensed",
      align: "center"
    }
  }, React.createElement(CenteringFixWrapper, null, React.createElement(_Text.default, {
    element: "p",
    weight: context === "MMB-PassengersSummary" ? "bold" : "normal",
    size: context === "MMB-PassengersSummary" ? "large" : "normal"
  }, "".concat(amount, "\xD7 "), category === "holdBag" && typeof restrictions.weight === "number" && "".concat(restrictions.weight, "kg "), (0, _getTextFromCategory.default)(category, function (x) {
    return x.toLowerCase();
  }))), React.createElement(CenteringFixWrapper, null, React.createElement(_Text.default, {
    element: "p",
    type: "secondary",
    size: context === "MMB-PassengersSummary" ? "normal" : "small"
  }, (0, _getBaggageSize.default)(restrictions))), FAQLinksHandler && React.createElement(_Hide.default, {
    on: ["largeMobile", "tablet", "desktop", "largeDesktop"]
  }, React.createElement(_Stack.default, {
    flex: true,
    shrink: true,
    align: "center",
    mediumMobile: {
      justify: "end"
    },
    spaceAfter: "large"
  }, React.createElement(_TextLink.default, {
    size: "small",
    onClick: function onClick() {
      return FAQLinksHandler(category);
    }
  }, _ref2))))), (FAQLinksHandler || !!passengers) && React.createElement(_Stack.default, {
    flex: true,
    shrink: true,
    align: "center",
    justify: "start",
    spacing: "compact",
    mediumMobile: {
      justify: FAQLinksHandler ? "end" : "start",
      shrink: true
    }
  }, passengers && React.createElement(React.Fragment, null, _ref3, React.createElement(CenteringFixWrapper, null, React.createElement(_Text.default, {
    element: "span",
    type: "secondary",
    dataTest: "BaggageOverview-BaggageItem-Passengers"
  }, (0, _getPassengerNames.default)(passengers)))), FAQLinksHandler && React.createElement(_Hide.default, {
    on: ["smallMobile", "mediumMobile"]
  }, React.createElement(_Stack.default, {
    flex: true,
    shrink: true,
    align: "center",
    mediumMobile: {
      justify: "end"
    },
    spaceAfter: "large"
  }, React.createElement(_TextLink.default, {
    size: "small",
    onClick: function onClick() {
      return FAQLinksHandler(category);
    }
  }, _ref4)))));
};

var _default = BaggageItem;
exports.default = _default;