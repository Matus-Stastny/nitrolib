"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ReturnTripsUnwrapped = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _TripItem = _interopRequireDefault(require("../TripItem"));

var ReturnTrips = function ReturnTrips(_ref) {
  var _item$outbound, _item$outbound$depart, _item$outbound$depart2, _item$outbound$depart3, _item$outbound2, _item$outbound2$depar, _item$inbound, _item$inbound$arrival, _item$outbound3, _item$outbound3$arriv, _item$outbound3$arriv2, _item$outbound3$arriv3;

  var item = _ref.item,
      onSelect = _ref.onSelect;
  return _react.default.createElement(_TripItem.default, {
    bid: String(item.databaseId),
    img: item.destinationImageUrl || "",
    passengerCount: item.passengerCount || 0,
    departureCity: ((_item$outbound = item.outbound) === null || _item$outbound === void 0 ? void 0 : (_item$outbound$depart = _item$outbound.departure) === null || _item$outbound$depart === void 0 ? void 0 : (_item$outbound$depart2 = _item$outbound$depart.airport) === null || _item$outbound$depart2 === void 0 ? void 0 : (_item$outbound$depart3 = _item$outbound$depart2.city) === null || _item$outbound$depart3 === void 0 ? void 0 : _item$outbound$depart3.name) || "",
    departureTime: ((_item$outbound2 = item.outbound) === null || _item$outbound2 === void 0 ? void 0 : (_item$outbound2$depar = _item$outbound2.departure) === null || _item$outbound2$depar === void 0 ? void 0 : _item$outbound2$depar.localTime) || new Date(),
    arrivalTime: ((_item$inbound = item.inbound) === null || _item$inbound === void 0 ? void 0 : (_item$inbound$arrival = _item$inbound.arrival) === null || _item$inbound$arrival === void 0 ? void 0 : _item$inbound$arrival.localTime) || new Date(),
    arrivalCity: ((_item$outbound3 = item.outbound) === null || _item$outbound3 === void 0 ? void 0 : (_item$outbound3$arriv = _item$outbound3.arrival) === null || _item$outbound3$arriv === void 0 ? void 0 : (_item$outbound3$arriv2 = _item$outbound3$arriv.airport) === null || _item$outbound3$arriv2 === void 0 ? void 0 : (_item$outbound3$arriv3 = _item$outbound3$arriv2.city) === null || _item$outbound3$arriv3 === void 0 ? void 0 : _item$outbound3$arriv3.name) || "",
    onSelect: onSelect
  });
};

var ReturnTripsUnwrapped = ReturnTrips;
exports.ReturnTripsUnwrapped = ReturnTripsUnwrapped;

var _default = (0, _reactRelay.createFragmentContainer)(ReturnTrips, {
  item: function item() {
    var node = require("./__generated__/ReturnTrips_item.graphql");

    if (node.hash && node.hash !== "006bb71b2347de8a23ead90d84765c69") {
      console.error("The definition of 'ReturnTrips_item' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/ReturnTrips_item.graphql");
  }
});

exports.default = _default;