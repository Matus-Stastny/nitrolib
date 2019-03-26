"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SingleBookingTripUnWrapped = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _OneWayTrips = _interopRequireDefault(require("../OneWayTrips"));

var _MulticityTrips = _interopRequireDefault(require("../MulticityTrips"));

var _ReturnTrips = _interopRequireDefault(require("../ReturnTrips"));

var SingleBookingTrip = function SingleBookingTrip(_ref) {
  var trip = _ref.trip,
      onSelect = _ref.onSelect;

  /* eslint-disable no-underscore-dangle */
  switch (trip.__typename) {
    case "BookingOneWay":
      /* $FlowExpected: TODO describe */
      return _react.default.createElement(_OneWayTrips.default, {
        key: trip.id,
        item: trip,
        onSelect: onSelect
      });

    case "BookingReturn":
      /* $FlowExpected: TODO describe */
      return _react.default.createElement(_ReturnTrips.default, {
        key: trip.id,
        item: trip,
        onSelect: onSelect
      });

    case "BookingMulticity":
      /* $FlowExpected: TODO describe */
      return _react.default.createElement(_MulticityTrips.default, {
        key: trip.id,
        item: trip,
        onSelect: onSelect
      });

    default:
      return null;
  }
  /* eslint-enable no-underscore-danble */

};

var SingleBookingTripUnWrapped = SingleBookingTrip;
exports.SingleBookingTripUnWrapped = SingleBookingTripUnWrapped;

var _default = (0, _reactRelay.createFragmentContainer)(SingleBookingTrip, {
  trip: function trip() {
    var node = require("./__generated__/SingleBookingTrip_trip.graphql");

    if (node.hash && node.hash !== "5a615c25c579bde41aefd2cfa17d35f6") {
      console.error("The definition of 'SingleBookingTrip_trip' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/SingleBookingTrip_trip.graphql");
  }
});

exports.default = _default;