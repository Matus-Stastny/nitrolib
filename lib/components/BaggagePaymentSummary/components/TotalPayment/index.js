"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _InformationCircle = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/InformationCircle"));

var _Price = _interopRequireDefault(require("../../../Price"));

var _context = _interopRequireDefault(require("../../../../services/currency/context"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _Theme = require("../../../../records/Theme");

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "TotalPayment__Wrapper",
  componentId: "sc-1epouhw-0"
})(["display:flex;justify-content:space-between;svg{margin-left:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceXXSmall;
});

Wrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref3 =
/*#__PURE__*/
_react.default.createElement(_InformationCircle.default, {
  size: "small",
  color: "secondary"
});

var TotalPayment = function TotalPayment(_ref2) {
  var totalPrice = _ref2.totalPrice;

  var _useContext = (0, _react.useContext)(_context.default),
      currency = _useContext.currency;

  return _react.default.createElement(Wrapper, {
    "data-test": "BaggagePaymentSummary-TotalPayment"
  }, _react.default.createElement(_Text.default, null, _react.default.createElement(_Translate.default, {
    t: "baggage_modal.payment.total",
    values: {
      currency: currency.name
    }
  }), _ref3), _react.default.createElement(_Text.default, null, _react.default.createElement(_Price.default, {
    value: totalPrice
  })));
};

var _default = TotalPayment;
exports.default = _default;