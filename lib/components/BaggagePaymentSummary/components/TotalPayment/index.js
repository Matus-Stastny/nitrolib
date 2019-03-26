"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _InformationCircle = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/InformationCircle"));

var _Price = _interopRequireDefault(require("../../../Price"));

var _context = require("../../../../services/currency/context");

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _Theme = require("../../../../records/Theme");

var Wrapper = _styledComponents.default.div.attrs({
  "data-test": "BaggagePaymentSummary-TotalPayment"
}).withConfig({
  displayName: "TotalPayment__Wrapper",
  componentId: "sc-1epouhw-0"
})(["display:flex;justify-content:space-between;svg{margin-left:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceXXSmall;
});

Wrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref4 =
/*#__PURE__*/
React.createElement(_InformationCircle.default, {
  size: "small",
  color: "secondary"
});

var TotalPayment = function TotalPayment(_ref2) {
  var totalPrice = _ref2.totalPrice;
  return React.createElement(Wrapper, null, React.createElement(_Text.default, null, React.createElement(_context.Consumer, null, function (_ref3) {
    var currency = _ref3.currency;
    return React.createElement(_Translate.default, {
      t: "baggage_modal.payment.total",
      values: {
        currency: currency.name
      }
    });
  }), _ref4), React.createElement(_Text.default, null, React.createElement(_Price.default, {
    value: totalPrice
  })));
};

var _default = TotalPayment;
exports.default = _default;