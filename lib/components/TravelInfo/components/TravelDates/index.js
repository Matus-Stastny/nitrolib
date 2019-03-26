"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Calendar = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Calendar"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Heading = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Heading"));

var _index = _interopRequireDefault(require("../../../Translate/index"));

var _ref2 =
/*#__PURE__*/
React.createElement(_Heading.default, {
  element: "h4",
  type: "title3",
  spaceAfter: "medium"
}, React.createElement(_index.default, {
  t: "holidays.detail.travel_dates"
}));

var _ref3 =
/*#__PURE__*/
React.createElement(_Calendar.default, {
  color: "primary"
});

var _ref4 =
/*#__PURE__*/
React.createElement("br", null);

var TravelDates = function TravelDates(_ref) {
  var data = _ref.data;
  var from = data.from,
      to = data.to;
  return React.createElement(React.Fragment, null, _ref2, React.createElement(_Stack.default, {
    direction: "row",
    spacing: "compact"
  }, _ref3, React.createElement(_Text.default, null, React.createElement(_index.default, {
    t: "holidays.hotel_tags.from_x_till_x_",
    values: {
      from: from,
      to: to
    },
    html: true
  }), _ref4, React.createElement(_index.default, {
    t: "holidays.detail.travel_dates.x_nights_in_resort",
    values: {
      num: 11
    }
  }))));
};

var _default = TravelDates;
exports.default = _default;