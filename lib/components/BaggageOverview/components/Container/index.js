"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var React = _interopRequireWildcard(require("react"));

var _getBaggageRowData = _interopRequireDefault(require("./services/getBaggageRowData"));

var BaggageOverviewContainer = function BaggageOverviewContainer(_ref) {
  var baggage = _ref.baggage,
      children = _ref.children,
      context = _ref.context,
      passengers = _ref.passengers;
  var definitionsWithPassengers = [].concat((0, _toConsumableArray2.default)((0, _getBaggageRowData.default)({
    bagType: "handBag",
    baggage: baggage,
    passengers: passengers
  })), (0, _toConsumableArray2.default)((0, _getBaggageRowData.default)({
    bagType: "holdBag",
    baggage: baggage,
    passengers: passengers
  })));
  return children({
    definitionsWithPassengers: definitionsWithPassengers,
    context: context
  });
};

var _default = BaggageOverviewContainer;
exports.default = _default;