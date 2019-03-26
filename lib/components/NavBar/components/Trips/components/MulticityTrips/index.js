"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MulticityTripsUnwrapped = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _TripItem = _interopRequireDefault(require("../TripItem"));

var MulticityTrips = function MulticityTrips(_ref) {
  var _item$start, _item$end, _item$start2, _item$start2$airport, _item$start2$airport$, _item$end2, _item$end2$airport, _item$end2$airport$ci, _multicityFirst$depar, _multicityFirst$depar2, _multicityFirst$depar3;

  var item = _ref.item,
      onSelect = _ref.onSelect;
  var multicityFirst = item.trips && item.trips.slice(1, 2)[0];
  var countOtherCities = item.trips && item.trips.slice(1);
  return _react.default.createElement(_TripItem.default, {
    bid: String(item.databaseId),
    img: item.destinationImageUrl || "",
    departureTime: ((_item$start = item.start) === null || _item$start === void 0 ? void 0 : _item$start.localTime) || new Date(),
    arrivalTime: ((_item$end = item.end) === null || _item$end === void 0 ? void 0 : _item$end.localTime) || new Date(),
    passengerCount: item.passengerCount || 0,
    departureCity: ((_item$start2 = item.start) === null || _item$start2 === void 0 ? void 0 : (_item$start2$airport = _item$start2.airport) === null || _item$start2$airport === void 0 ? void 0 : (_item$start2$airport$ = _item$start2$airport.city) === null || _item$start2$airport$ === void 0 ? void 0 : _item$start2$airport$.name) || "",
    arrivalCity: ((_item$end2 = item.end) === null || _item$end2 === void 0 ? void 0 : (_item$end2$airport = _item$end2.airport) === null || _item$end2$airport === void 0 ? void 0 : (_item$end2$airport$ci = _item$end2$airport.city) === null || _item$end2$airport$ci === void 0 ? void 0 : _item$end2$airport$ci.name) || "",
    multicityFirst: (multicityFirst === null || multicityFirst === void 0 ? void 0 : (_multicityFirst$depar = multicityFirst.departure) === null || _multicityFirst$depar === void 0 ? void 0 : (_multicityFirst$depar2 = _multicityFirst$depar.airport) === null || _multicityFirst$depar2 === void 0 ? void 0 : (_multicityFirst$depar3 = _multicityFirst$depar2.city) === null || _multicityFirst$depar3 === void 0 ? void 0 : _multicityFirst$depar3.name) || "",
    countOtherCities: Array.isArray(countOtherCities) ? countOtherCities.length : 0,
    onSelect: onSelect
  });
};

var MulticityTripsUnwrapped = MulticityTrips;
exports.MulticityTripsUnwrapped = MulticityTripsUnwrapped;

var _default = (0, _reactRelay.createFragmentContainer)(MulticityTrips, {
  item: function item() {
    var node = require("./__generated__/MulticityTrips_item.graphql");

    if (node.hash && node.hash !== "3aa08107b6dc411c511eac6432239177") {
      console.error("The definition of 'MulticityTrips_item' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/MulticityTrips_item.graphql");
  }
});

exports.default = _default;