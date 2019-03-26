"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TripListUnwrapped = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Translate = _interopRequireDefault(require("../../../../../Translate"));

var _context = require("../../../../../../services/intl/context");

var _OneWayTrips = _interopRequireDefault(require("../OneWayTrips"));

var _MulticityTrips = _interopRequireDefault(require("../MulticityTrips"));

var _TripListBottom = _interopRequireDefault(require("../TripListBottom"));

var _BottomTripItem = _interopRequireDefault(require("../BottomTripItem"));

var _Theme = require("../../../../../../records/Theme");

var _ReturnTrips = _interopRequireDefault(require("../ReturnTrips"));

var Paddings = _styledComponents.default.div.withConfig({
  displayName: "TripList__Paddings",
  componentId: "sc-1gmxdhb-0"
})(["padding:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceSmall;
});

Paddings.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref3 =
/*#__PURE__*/
_react.default.createElement(Paddings, null, _react.default.createElement(_Translate.default, {
  t: "account.no_trips"
}));

var TripList = function TripList(_ref2) {
  var list = _ref2.list,
      onSelect = _ref2.onSelect;
  var trips = list.edges && list.edges.map(function (edge) {
    return edge && edge.node;
  }).filter(Boolean);
  var upcoming = trips && trips.filter(function (trip) {
    return trip && !trip.isPastBooking && trip;
  });
  var firstTwo = upcoming && upcoming.slice(0, 2);
  var futureTrips = upcoming && upcoming.slice(2, 6);

  if (upcoming && upcoming.length === 0) {
    return _ref3;
  }

  return _react.default.createElement(_react.default.Fragment, null, firstTwo && firstTwo.map(function (item) {
    /* eslint-disable no-underscore-dangle */
    if (item.__typename === "BookingOneWay") {
      /* $FlowExpected: TODO describe */
      return _react.default.createElement(_OneWayTrips.default, {
        key: item.id,
        item: item,
        onSelect: onSelect
      });
    }

    if (item.__typename === "BookingReturn") {
      /* $FlowExpected: TODO describe */
      return _react.default.createElement(_ReturnTrips.default, {
        key: item.id,
        item: item,
        onSelect: onSelect
      });
    }

    if (item.__typename === "BookingMulticity") {
      /* $FlowExpected: TODO describe */
      return _react.default.createElement(_MulticityTrips.default, {
        key: item.id,
        item: item,
        onSelect: onSelect
      });
    }
    /* eslint-enable no-underscore-danble */


    return null;
  }), futureTrips && futureTrips.length > 0 && _react.default.createElement(_TripListBottom.default, null, _react.default.createElement(_context.Consumer, null, function (_ref4) {
    var language = _ref4.language;
    return futureTrips && futureTrips.map(function (item) {
      return _react.default.createElement(_BottomTripItem.default, {
        key: item.id,
        id: item.id,
        imageUrl: item.destinationImageUrl || "",
        lang: language.id
      });
    });
  })));
};

var TripListUnwrapped = TripList;
exports.TripListUnwrapped = TripListUnwrapped;

var _default = (0, _reactRelay.createFragmentContainer)(TripList, {
  list: function list() {
    var node = require("./__generated__/TripList_list.graphql");

    if (node.hash && node.hash !== "fa9370d718354044922600f122382b34") {
      console.error("The definition of 'TripList_list' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/TripList_list.graphql");
  }
});

exports.default = _default;