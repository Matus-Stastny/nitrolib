"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _InformationCircle = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/InformationCircle"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Price = _interopRequireDefault(require("../../../Price"));

var _context = _interopRequireDefault(require("../../../../services/currency/context"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_InformationCircle.default, {
  size: "small",
  color: "secondary"
});

var TotalPayment = function TotalPayment(_ref) {
  var totalPrice = _ref.totalPrice;

  var _useContext = (0, _react.useContext)(_context.default),
      currency = _useContext.currency;

  return _react.default.createElement(_Stack.default, {
    flex: true,
    align: "center",
    justify: "between",
    dataTest: "BaggagePaymentSummary-TotalPayment"
  }, _react.default.createElement(_Stack.default, {
    inline: true,
    align: "center",
    spacing: "tight"
  }, _react.default.createElement(_Text.default, null, _react.default.createElement(_Translate.default, {
    t: "baggage_modal.payment.total",
    values: {
      currency: currency.name
    }
  })), _ref2), _react.default.createElement(_Text.default, null, _react.default.createElement(_Price.default, {
    value: totalPrice
  })));
};

var _default = TotalPayment;
exports.default = _default;