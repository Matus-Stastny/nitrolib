"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TripHeaderUnwrapped = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _ButtonLink = _interopRequireDefault(require("../../../../primitives/ButtonLink"));

var _Translate = _interopRequireDefault(require("../../../../../Translate"));

var _context = require("../../../../../../services/intl/context");

var _ref2 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.past_trips"
});

var TripHeader = function TripHeader(_ref) {
  var trips = _ref.trips;
  var countTrips = trips.edges ? trips.edges.map(function (edge) {
    return edge && edge.node;
  }).filter(Boolean).filter(function (item) {
    return item.isPastBooking === false;
  }).length : 0;
  return React.createElement(_context.Consumer, null, function (intl) {
    return React.createElement(React.Fragment, null, React.createElement(_ButtonLink.default, {
      marginLeft: 20,
      bold: true,
      href: "/".concat(intl.language.id, "/account#future"),
      color: "secondary"
    }, React.createElement(_Translate.default, {
      t: "account.upcoming_trips",
      values: {
        trips: countTrips
      }
    })), React.createElement(_ButtonLink.default, {
      marginRight: 20,
      color: "primary",
      bold: true,
      href: "/".concat(intl.language.id, "/account#past")
    }, _ref2));
  });
};

var TripHeaderUnwrapped = TripHeader;
exports.TripHeaderUnwrapped = TripHeaderUnwrapped;

var _default = (0, _reactRelay.createFragmentContainer)(TripHeader, {
  trips: function trips() {
    var node = require("./__generated__/TripHeader_trips.graphql");

    if (node.hash && node.hash !== "0b7096095f7d347cdda90dbb8f1f0624") {
      console.error("The definition of 'TripHeader_trips' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/TripHeader_trips.graphql");
  }
});

exports.default = _default;