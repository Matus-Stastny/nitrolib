"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propEq2 = _interopRequireDefault(require("ramda/src/propEq"));

var React = _interopRequireWildcard(require("react"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _groupDefinitions = _interopRequireDefault(require("./services/groupDefinitions"));

var _BaggageItem = _interopRequireDefault(require("./components/BaggageItem"));

var _NoPersonalItem = _interopRequireDefault(require("./components/NoPersonalItem"));

var _ref2 =
/*#__PURE__*/
React.createElement(_NoPersonalItem.default, null);

var BaggageOverview = function BaggageOverview(_ref) {
  var definitions = _ref.definitions,
      definitionsWithPassengers = _ref.definitionsWithPassengers,
      context = _ref.context,
      FAQLinksHandler = _ref.FAQLinksHandler;
  var baggages = definitionsWithPassengers || definitions && (0, _groupDefinitions.default)(definitions);
  return React.createElement(_Stack.default, {
    flex: true,
    direction: "column",
    dataTest: "BaggageOverview-".concat(context),
    mediumMobile: {
      spacing: context === "MMB-PassengersSummary" ? "condensed" : "tight",
      direction: "column"
    }
  }, baggages && !baggages.some((0, _propEq2.default)("category", "personalItem")) && _ref2, baggages && baggages.map(function (bag, index) {
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