"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OneWayTripsUnwrapped = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _TripItem = _interopRequireDefault(require("../TripItem"));

var OneWayTrips = function OneWayTrips(_ref) {
  var _item$trip, _item$trip$departure, _item$trip2, _item$trip2$arrival, _item$trip3, _item$trip3$departure, _item$trip3$departure2, _item$trip3$departure3, _item$trip4, _item$trip4$arrival, _item$trip4$arrival$a, _item$trip4$arrival$a2;

  var item = _ref.item,
      onSelect = _ref.onSelect;
  return _react.default.createElement(_TripItem.default, {
    bid: String(item.databaseId),
    img: item.destinationImageUrl || "",
    departureTime: ((_item$trip = item.trip) === null || _item$trip === void 0 ? void 0 : (_item$trip$departure = _item$trip.departure) === null || _item$trip$departure === void 0 ? void 0 : _item$trip$departure.localTime) || new Date(),
    arrivalTime: ((_item$trip2 = item.trip) === null || _item$trip2 === void 0 ? void 0 : (_item$trip2$arrival = _item$trip2.arrival) === null || _item$trip2$arrival === void 0 ? void 0 : _item$trip2$arrival.localTime) || new Date(),
    passengerCount: item.passengerCount || 0,
    departureCity: ((_item$trip3 = item.trip) === null || _item$trip3 === void 0 ? void 0 : (_item$trip3$departure = _item$trip3.departure) === null || _item$trip3$departure === void 0 ? void 0 : (_item$trip3$departure2 = _item$trip3$departure.airport) === null || _item$trip3$departure2 === void 0 ? void 0 : (_item$trip3$departure3 = _item$trip3$departure2.city) === null || _item$trip3$departure3 === void 0 ? void 0 : _item$trip3$departure3.name) || "",
    arrivalCity: ((_item$trip4 = item.trip) === null || _item$trip4 === void 0 ? void 0 : (_item$trip4$arrival = _item$trip4.arrival) === null || _item$trip4$arrival === void 0 ? void 0 : (_item$trip4$arrival$a = _item$trip4$arrival.airport) === null || _item$trip4$arrival$a === void 0 ? void 0 : (_item$trip4$arrival$a2 = _item$trip4$arrival$a.city) === null || _item$trip4$arrival$a2 === void 0 ? void 0 : _item$trip4$arrival$a2.name) || "",
    onSelect: onSelect
  });
};

var OneWayTripsUnwrapped = OneWayTrips;
exports.OneWayTripsUnwrapped = OneWayTripsUnwrapped;

var _default = (0, _reactRelay.createFragmentContainer)(OneWayTrips, {
  item: function item() {
    var node = require("./__generated__/OneWayTrips_item.graphql");

    if (node.hash && node.hash !== "9815b8aec8eb2f7144f9310a42074c29") {
      console.error("The definition of 'OneWayTrips_item' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/OneWayTrips_item.graphql");
  }
});

exports.default = _default;