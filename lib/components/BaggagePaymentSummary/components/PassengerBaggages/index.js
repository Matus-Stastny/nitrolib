"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Price = _interopRequireDefault(require("../../../Price"));

var _getTextFromCategory = _interopRequireDefault(require("../../../../services/baggage/getTextFromCategory"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var PassengerBaggages = function PassengerBaggages(_ref) {
  var paxId = _ref.paxId,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      baggage = _ref.baggage,
      price = _ref.price;
  return React.createElement(_Stack.default, {
    spaceAfter: "medium",
    spacing: "tight",
    dataTest: "BaggagePaymentSummary-PassengerBaggages-".concat(paxId)
  }, React.createElement(_Stack.default, {
    flex: true,
    justify: "between"
  }, React.createElement(_Text.default, null, React.createElement(_Translate.default, {
    t: "baggage_modal.summary.baggage_for",
    values: {
      firstName: firstName,
      lastName: lastName
    }
  })), React.createElement(_Text.default, {
    dataTest: "BaggagePaymentSummary-PassengerBaggages-".concat(paxId, "-Price")
  }, React.createElement(_Price.default, {
    value: price
  }))), React.createElement(_Stack.default, {
    spacing: "tight"
  }, baggage.handBag.map(function (bag, index) {
    return React.createElement(_Stack.default, {
      key: index
      /* eslint-disable-line */

    }, React.createElement(_Text.default, {
      type: "secondary",
      element: "span"
    }, "".concat(bag.amount, "\xD7 "), (0, _getTextFromCategory.default)(bag.category)));
  }), baggage.holdBag.map(function (bag, index) {
    return React.createElement(_Stack.default, {
      key: index
      /* eslint-disable-line */

    }, React.createElement(_Text.default, {
      type: "secondary",
      element: "span"
    }, "".concat(bag.amount, "\xD7 "), (0, _getTextFromCategory.default)(bag.category)));
  })));
};

var _default = PassengerBaggages;
exports.default = _default;