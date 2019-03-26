"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _innerJoin2 = _interopRequireDefault(require("ramda/src/innerJoin"));

var React = _interopRequireWildcard(require("react"));

var BaggageOverviewContainer = function BaggageOverviewContainer(_ref) {
  var baggage = _ref.baggage,
      children = _ref.children,
      context = _ref.context,
      passengers = _ref.passengers;
  var combinations = baggage.combinations;
  var passengersWithBagDefinitionsIndices = passengers.map(function (passenger) {
    return {
      paxId: passenger.paxId,
      definitionsIndices: {
        handBag: combinations.handBag[passenger.baggage.handBag].indices,
        holdBag: combinations.holdBag[passenger.baggage.holdBag].indices
      }
    };
  });

  var getPassengersFromId = function getPassengersFromId(paxIds, passengersArray) {
    return (0, _innerJoin2.default)(function (passenger, paxId) {
      return passenger.paxId === paxId;
    }, passengersArray, paxIds).map(function (p) {
      return {
        paxId: p.paxId,
        firstName: p.firstName,
        middleName: p.middleName,
        lastName: p.lastName
      };
    });
  };

  var getBaggageRowData = function getBaggageRowData(bagType) {
    var defs = baggage.definitions[bagType];
    var baggageData = passengersWithBagDefinitionsIndices.reduce(function (acc, passenger) {
      return acc.concat.apply(acc, (0, _toConsumableArray2.default)(passenger.definitionsIndices[bagType].map(function (bagIndex) {
        return {
          paxId: passenger.paxId,
          originalIndex: bagIndex,
          category: defs[bagIndex].category,
          restrictions: defs[bagIndex].restrictions
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
        passengers: getPassengersFromId(bag.passengers, passengers)
      });
    });
  };

  var definitionWithPassengers = [].concat((0, _toConsumableArray2.default)(getBaggageRowData("handBag")), (0, _toConsumableArray2.default)(getBaggageRowData("holdBag")));
  return children({
    definitionWithPassengers: definitionWithPassengers,
    context: context
  });
};

var _default = BaggageOverviewContainer;
exports.default = _default;