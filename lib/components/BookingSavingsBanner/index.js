"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Illustration = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Illustration"));

var _Heading = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Heading"));

var _Deals = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Deals"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Card = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Card"));

var _CardSection = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Card/CardSection"));

var _Translate = _interopRequireDefault(require("../Translate"));

var _ref2 =
/*#__PURE__*/
React.createElement(_Deals.default, null);

var _ref3 =
/*#__PURE__*/
React.createElement(_Text.default, {
  spaceAfter: "medium"
}, React.createElement(_Translate.default, {
  t: "booking.savings_banner.description"
}));

var _ref4 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "booking.savings_banner.find_more_trips"
});

var _ref5 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "common.learn_more"
});

var _ref6 =
/*#__PURE__*/
React.createElement(_Illustration.default, {
  name: "Money",
  size: "small"
});

var BookingSavingsBanner = function BookingSavingsBanner(_ref) {
  var amount = _ref.amount,
      currency = _ref.currency,
      onLearnMoreClick = _ref.onLearnMoreClick,
      onMoreTripsClick = _ref.onMoreTripsClick;
  return React.createElement(_Card.default, {
    dataTest: "BookingSavingsBanner"
  }, React.createElement(_CardSection.default, null, React.createElement(_Stack.default, {
    direction: "column",
    align: "start",
    spacing: "natural",
    desktop: {
      direction: "row",
      align: "center",
      spacing: "tight"
    }
  }, React.createElement(_Stack.default, {
    inline: true,
    shrink: true,
    direction: "column",
    spacing: "natural"
  }, React.createElement(_Stack.default, {
    direction: "column",
    spacing: "condensed"
  }, React.createElement(_Stack.default, {
    align: "center",
    spacing: "condensed"
  }, _ref2, React.createElement(_Heading.default, {
    element: "h2",
    type: "title2"
  }, React.createElement(_Translate.default, {
    t: "booking.savings_banner.title",
    values: {
      amount: amount,
      currency: currency
    }
  }))), _ref3), React.createElement(_Stack.default, {
    shrink: true,
    wrap: true
  }, React.createElement(_Button.default, {
    dataTest: "BookingSavingsBanner-MoreTrips",
    onClick: onMoreTripsClick,
    type: "secondary",
    size: "small"
  }, _ref4), React.createElement(_Button.default, {
    dataTest: "BookingSavingsBanner-LearnMore",
    onClick: onLearnMoreClick,
    size: "small",
    type: "secondary"
  }, _ref5))), _ref6)));
};

var _default = BookingSavingsBanner;
exports.default = _default;