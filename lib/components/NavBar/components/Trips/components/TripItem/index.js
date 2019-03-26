"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _RouteOneStop = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/RouteOneStop"));

var _RouteTwoStops = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/RouteTwoStops"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _parseISO = _interopRequireDefault(require("date-fns/fp/parseISO"));

var _ItemWrapper = _interopRequireDefault(require("../../primitives/ItemWrapper"));

var _TripInfo = _interopRequireDefault(require("../../primitives/TripInfo"));

var _Column = _interopRequireDefault(require("../../primitives/Column"));

var _TripInfoLine = _interopRequireDefault(require("../../primitives/TripInfoLine"));

var _Translate = _interopRequireDefault(require("../../../../../Translate"));

var _Day = _interopRequireDefault(require("../../../../../Day"));

var Img = _styledComponents.default.img.withConfig({
  displayName: "TripItem__Img",
  componentId: "kyubhj-0"
})(["display:flex;justify-content:center;overflow:hidden;height:120px;", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["height:180px;"])));

var _ref2 =
/*#__PURE__*/
React.createElement(_RouteOneStop.default, {
  size: "small"
});

var _ref3 =
/*#__PURE__*/
React.createElement(_RouteTwoStops.default, {
  size: "medium"
});

var TripItem = function TripItem(_ref) {
  var bid = _ref.bid,
      img = _ref.img,
      departureTime = _ref.departureTime,
      arrivalTime = _ref.arrivalTime,
      departureCity = _ref.departureCity,
      multicityFirst = _ref.multicityFirst,
      countOtherCities = _ref.countOtherCities,
      arrivalCity = _ref.arrivalCity,
      passengerCount = _ref.passengerCount,
      onSelect = _ref.onSelect;
  return React.createElement(_ItemWrapper.default, {
    onClick: function onClick() {
      return onSelect(bid);
    }
  }, React.createElement(Img, {
    src: img,
    alt: "img"
  }), React.createElement(_TripInfo.default, null, React.createElement(_Column.default, null, React.createElement(_TripInfoLine.default, {
    darker: true
  }, departureCity, countOtherCities !== 0 && _ref2, multicityFirst, +countOtherCities > 1 && React.createElement(React.Fragment, null, _ref3, React.createElement(_Translate.default, {
    t: "account.trips_others",
    values: {
      others: countOtherCities
    }
  }))), React.createElement(_TripInfoLine.default, {
    fontSize: "24",
    darker: true
  }, arrivalCity)), React.createElement(_Column.default, null, React.createElement(_TripInfoLine.default, null, React.createElement(_Day.default, {
    date: (0, _parseISO.default)(departureTime)
  }), " - ", React.createElement(_Day.default, {
    date: (0, _parseISO.default)(arrivalTime)
  })), React.createElement(_TripInfoLine.default, null, React.createElement(_Translate.default, {
    t: "account.trips_passengers",
    values: {
      passengers: passengerCount
    }
  })))));
};

TripItem.defaultProps = {
  countOtherCities: 0
};
var _default = TripItem;
exports.default = _default;