"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Card = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Card"));

var _CardSection = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Card/CardSection"));

var _Separator = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Separator"));

var _PassengerBaggages = _interopRequireDefault(require("./components/PassengerBaggages"));

var _TotalPayment = _interopRequireDefault(require("./components/TotalPayment"));

var _getTotalPrice = _interopRequireDefault(require("../../services/baggage/getTotalPrice"));

var _getDefinitions = _interopRequireDefault(require("./services/getDefinitions"));

var _ref2 =
/*#__PURE__*/
React.createElement(_Separator.default, {
  spaceAfter: "large"
});

var BaggagePaymentSummary = function BaggagePaymentSummary(_ref) {
  var baggage = _ref.baggage,
      passengers = _ref.passengers;
  var combinations = baggage.combinations,
      definitions = baggage.definitions;
  var passengersWithBagDefinitions = passengers.map(function (passenger) {
    return {
      paxId: passenger.paxId,
      firstName: passenger.firstName,
      lastName: passenger.lastName,
      baggage: {
        handBag: (0, _getDefinitions.default)(definitions.handBag, combinations.handBag[passenger.baggage.handBag].indices),
        holdBag: (0, _getDefinitions.default)(definitions.holdBag, combinations.holdBag[passenger.baggage.holdBag].indices)
      },
      price: combinations.handBag[passenger.baggage.handBag].price.amount + combinations.holdBag[passenger.baggage.holdBag].price.amount
    };
  });
  var passengersCombinationsIndices = {
    handBag: passengers.map(function (passenger) {
      return passenger.baggage.handBag;
    }),
    holdBag: passengers.map(function (passenger) {
      return passenger.baggage.holdBag;
    })
  };
  return React.createElement(_Card.default, {
    dataTest: "BaggagePaymentSummary"
  }, React.createElement(_CardSection.default, null, passengersWithBagDefinitions.map(function (passenger) {
    return React.createElement(_PassengerBaggages.default, (0, _extends2.default)({
      key: passenger.paxId
    }, passenger));
  }), _ref2, React.createElement(_TotalPayment.default, {
    totalPrice: (0, _getTotalPrice.default)({
      combinationIndices: passengersCombinationsIndices,
      combinations: combinations
    })
  })));
};

var _default = BaggagePaymentSummary;
exports.default = _default;