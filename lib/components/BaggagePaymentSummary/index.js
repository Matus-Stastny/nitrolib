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

var _utils = require("../../services/baggage/utils");

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

  var getDefinitions = function getDefinitions(def, indices) {
    var data = indices.reduce(function (acc, optionIndex) {
      var key = optionIndex.toString();

      if (acc[key]) {
        acc[key].amount += 1;
      } else {
        acc[key] = {
          amount: 1,
          category: def[optionIndex].category,
          restrictions: def[optionIndex].restrictions,
          conditions: def[optionIndex].conditions
        };
      }

      return acc;
    }, {});
    return Object.keys(data).map(function (key) {
      return data[key];
    });
  };

  var passengersWithBagDefinitions = passengers.map(function (passenger) {
    return {
      id: passenger.id,
      firstName: passenger.firstName,
      lastName: passenger.lastName,
      baggage: {
        handBag: getDefinitions(definitions.handBag, combinations.handBag[passenger.baggage.handBag].indices),
        holdBag: getDefinitions(definitions.holdBag, combinations.holdBag[passenger.baggage.holdBag].indices)
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
      key: passenger.id
    }, passenger));
  }), _ref2, React.createElement(_TotalPayment.default, {
    totalPrice: (0, _utils.getTotalPrice)({
      combinationIndices: passengersCombinationsIndices,
      combinations: combinations
    })
  })));
};

var _default = BaggagePaymentSummary;
exports.default = _default;