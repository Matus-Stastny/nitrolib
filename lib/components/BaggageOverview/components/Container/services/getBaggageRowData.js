"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBaggageRowData;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _getPassengersFromId = _interopRequireDefault(require("./getPassengersFromId"));

function getBaggageRowData(_ref) {
  var bagType = _ref.bagType,
      baggage = _ref.baggage,
      passengers = _ref.passengers;
  var combinations = baggage.combinations;
  var definitions = baggage.definitions[bagType];
  var passengersWithBagDefinitionsIndices = passengers.map(function (passenger) {
    return {
      paxId: passenger.paxId,
      definitionsIndices: {
        handBag: combinations.handBag[passenger.baggage.handBag].indices,
        holdBag: combinations.holdBag[passenger.baggage.holdBag].indices
      }
    };
  });
  var baggageData = passengersWithBagDefinitionsIndices.reduce(function (acc, passenger) {
    return acc.concat.apply(acc, (0, _toConsumableArray2.default)(passenger.definitionsIndices[bagType].map(function (bagIndex) {
      return {
        paxId: passenger.paxId,
        originalIndex: bagIndex,
        category: definitions[bagIndex].category,
        restrictions: definitions[bagIndex].restrictions
      };
    })));
  }, []);
  var baggageWithPassengersIds = baggageData.reduce(function (acc, bag) {
    var _acc$bag$originalInde;

    var bagPassengers = ((_acc$bag$originalInde = acc[bag.originalIndex]) === null || _acc$bag$originalInde === void 0 ? void 0 : _acc$bag$originalInde.passengers) || [];
    acc[bag.originalIndex] = {
      originalIndex: bag.originalIndex,
      category: bag.category,
      passengers: [].concat((0, _toConsumableArray2.default)(bagPassengers), [bag.paxId]),
      restrictions: bag.restrictions
    };
    return acc;
  }, {});
  return (0, _values2.default)(baggageWithPassengersIds).map(function (bag) {
    return (0, _objectSpread2.default)({}, bag, {
      passengers: (0, _getPassengersFromId.default)(bag.passengers, passengers)
    });
  });
}