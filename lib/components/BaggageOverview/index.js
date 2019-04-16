"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propEq2 = _interopRequireDefault(require("ramda/src/propEq"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _groupDefinitions = _interopRequireDefault(require("./services/groupDefinitions"));

var _Theme = require("../../records/Theme");

var _BaggageItem = _interopRequireDefault(require("./components/BaggageItem"));

var _NoPersonalItem = _interopRequireDefault(require("./components/NoPersonalItem"));

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "BaggageOverview__Wrapper",
  componentId: "sc-1l5i4pq-0"
})(["width:100%;> div{margin-bottom:10px;", ";}"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["margin-bottom:", ";"], function (_ref) {
  var theme = _ref.theme,
      context = _ref.context;
  return context === "MMB-PassengersSummary" ? theme.orbit.spaceXSmall : theme.orbit.spaceXXSmall;
})));

Wrapper.defaultProps = {
  theme: _Theme.themeDefault,
  context: "booking"
};

var _ref3 =
/*#__PURE__*/
React.createElement(_NoPersonalItem.default, null);

var BaggageOverview = function BaggageOverview(_ref2) {
  var definitions = _ref2.definitions,
      definitionsWithPassengers = _ref2.definitionsWithPassengers,
      context = _ref2.context,
      FAQLinksHandler = _ref2.FAQLinksHandler;
  var baggages = definitionsWithPassengers || definitions && (0, _groupDefinitions.default)(definitions);
  return React.createElement(Wrapper, {
    context: context,
    "data-test": "BaggageOverview-".concat(context)
  }, baggages && !baggages.some((0, _propEq2.default)("category", "personalItem")) && _ref3, baggages && baggages.map(function (bag, index) {
    return React.createElement(_BaggageItem.default, {
      key: index // eslint-disable-line
      ,
      amount: bag.passengers ? bag.passengers.length : bag.amount,
      passengers: bag.passengers,
      category: bag.category,
      restrictions: bag.restrictions,
      FAQLinksHandler: FAQLinksHandler,
      context: context
    });
  }));
};

var _default = BaggageOverview;
exports.default = _default;