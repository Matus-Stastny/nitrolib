"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Alert"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Translate = _interopRequireDefault(require("../../../../../Translate"));

var _TripsContainer = _interopRequireDefault(require("../../../../../TripsContainer"));

var _SingleTripHeader = _interopRequireDefault(require("../SingleTripHeader"));

var _SingleBookingTrip = _interopRequireDefault(require("../SingleBookingTrip"));

var _SingleTripBottom = _interopRequireDefault(require("../SingleTripBottom"));

var _graphql;

var StateContainer = _styledComponents.default.div.withConfig({
  displayName: "SingleTripData__StateContainer",
  componentId: "achbra-0"
})(["padding:10px;"]);

var _ref2 =
/*#__PURE__*/
React.createElement(_TripsContainer.default, {
  padding: true,
  positionMenuTablet: 0,
  positionMenuDesktop: 50
}, React.createElement(StateContainer, null, React.createElement(_Translate.default, {
  t: "common.loading"
})));

var _ref3 =
/*#__PURE__*/
React.createElement(_TripsContainer.default, {
  padding: true,
  positionMenuTablet: 0,
  positionMenuDesktop: 50
}, React.createElement(StateContainer, null, React.createElement(_Alert.default, null, React.createElement(_Translate.default, {
  t: "account.no_trips"
}))));

var _ref4 =
/*#__PURE__*/
React.createElement(_SingleTripHeader.default, null);

var _ref5 =
/*#__PURE__*/
React.createElement(_SingleTripBottom.default, null);

var SingleTripData = function SingleTripData(_ref) {
  var env = _ref.env,
      onSelect = _ref.onSelect,
      singleBid = _ref.singleBid;
  return React.createElement(_reactRelay.QueryRenderer, {
    environment: env,
    query: _graphql || (_graphql = function _graphql() {
      var node = require("./__generated__/SingleTripDataQuery.graphql");

      if (node.hash && node.hash !== "fad74da4baf898c8ae9a43d388b7b796") {
        console.error("The definition of 'SingleTripDataQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("./__generated__/SingleTripDataQuery.graphql");
    }),
    variables: {
      bookingID: singleBid
    },
    render: function render(res) {
      if (res.error) {
        return React.createElement(_TripsContainer.default, {
          padding: true,
          positionMenuTablet: 0,
          positionMenuDesktop: 50
        }, React.createElement(StateContainer, null, React.createElement(_Alert.default, {
          type: "critical"
        }, String(res.error))));
      }

      if (!res.props) {
        return _ref2;
      }

      var singleBooking = res.props.singleBooking;

      if (!singleBooking) {
        return _ref3;
      }

      return React.createElement(_TripsContainer.default, {
        header: _ref4,
        positionMenuTablet: 0,
        positionMenuDesktop: 50
      }, singleBooking && React.createElement(React.Fragment, null, React.createElement(_SingleBookingTrip.default, {
        trip: singleBooking,
        onSelect: onSelect
      }), _ref5));
    }
  });
};

var _default = SingleTripData;
exports.default = _default;