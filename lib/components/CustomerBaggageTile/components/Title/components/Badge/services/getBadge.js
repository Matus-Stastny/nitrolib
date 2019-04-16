"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBadge;

var _react = _interopRequireDefault(require("react"));

var _Badge = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Badge"));

var _Money = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Money"));

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Alert"));

var _Reload = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Reload"));

var _context = require("../../../../../../../services/currency/context");

var _Currency = require("../../../../../../../records/Currency");

var _index = _interopRequireDefault(require("../../../../../../Translate/index"));

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Reload.default, null);

var _ref3 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.badge.processing"
});

var _ref4 =
/*#__PURE__*/
_react.default.createElement(_Alert.default, {
  size: "small"
});

var _ref5 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.badge.not_available"
});

function getBadge(status, price) {
  switch (status) {
    case "unpaid":
      return _react.default.createElement(_Badge.default, {
        type: "warning",
        icon: _react.default.createElement(_Money.default, {
          size: "small",
          dataTest: "CustomerBaggageTile-Badge-".concat(status)
        })
      }, _react.default.createElement(_context.Consumer, null, function (_ref) {
        var currency = _ref.currency;
        return typeof price === "number" && _react.default.createElement(_index.default, {
          t: "baggage_modal.badge.unpaid",
          values: {
            price: (0, _Currency.format)(currency, price)
          }
        });
      }));

    case "processing":
      return _react.default.createElement(_Badge.default, {
        type: "info",
        icon: _ref2,
        dataTest: "CustomerBaggageTile-Badge-".concat(status)
      }, _ref3);

    case "notAvailable":
      return _react.default.createElement(_Badge.default, {
        type: "dark",
        icon: _ref4,
        dataTest: "CustomerBaggageTile-Badge-".concat(status)
      }, _ref5);

    default:
      return null;
  }
}