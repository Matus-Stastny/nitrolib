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

var _Translate = _interopRequireDefault(require("../../../../../Translate"));

var _TripHeader = _interopRequireDefault(require("../TripHeader"));

var _TripList = _interopRequireDefault(require("../TripList"));

var _TripsContainer = _interopRequireDefault(require("../../../../../TripsContainer"));

var _graphql;

var _ref2 =
/*#__PURE__*/
React.createElement(_TripsContainer.default, {
  padding: true,
  positionMenuTablet: 0,
  positionMenuDesktop: 50
}, React.createElement(_Translate.default, {
  t: "common.loading"
}));

var _ref3 =
/*#__PURE__*/
React.createElement(_TripsContainer.default, {
  padding: true,
  positionMenuTablet: 0,
  positionMenuDesktop: 50
}, React.createElement(_Alert.default, null, React.createElement(_Translate.default, {
  t: "account.no_trips"
})));

var TripDataList = function TripDataList(_ref) {
  var env = _ref.env,
      onSelect = _ref.onSelect;
  return React.createElement(_reactRelay.QueryRenderer, {
    environment: env,
    query: _graphql || (_graphql = function _graphql() {
      var node = require("./__generated__/TripDataListQuery.graphql");

      if (node.hash && node.hash !== "65b258ef9cb945a973d4e4892f88f656") {
        console.error("The definition of 'TripDataListQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("./__generated__/TripDataListQuery.graphql");
    }),
    variables: {},
    render: function render(res) {
      if (res.error) {
        return React.createElement(_TripsContainer.default, {
          padding: true,
          positionMenuTablet: 0,
          positionMenuDesktop: 50
        }, React.createElement(_Alert.default, {
          type: "critical"
        }, String(res.error)));
      }

      if (!res.props) {
        return _ref2;
      }

      var customerBookings = res.props.customerBookings;

      if (!customerBookings) {
        return _ref3;
      }

      return React.createElement(_TripsContainer.default, {
        header: React.createElement(_TripHeader.default, {
          trips: customerBookings
        }),
        positionMenuTablet: 0,
        positionMenuDesktop: 50
      }, React.createElement(_TripList.default, {
        list: customerBookings,
        onSelect: onSelect
      }));
    }
  });
};

var _default = TripDataList;
exports.default = _default;