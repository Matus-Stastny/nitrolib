"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Badge = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Badge"));

var _Money = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Money"));

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Alert"));

var _Reload = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Reload"));

var _Tooltip = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Tooltip"));

var _context = require("../../../../../../services/currency/context");

var _Currency = require("../../../../../../records/Currency");

var _index = _interopRequireDefault(require("../../../../../Translate/index"));

var _ref =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.tooltip.unpaid"
});

var _ref2 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.tooltip.processing"
});

var _ref3 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.tooltip.not_available"
});

var getTooltipText = function getTooltipText(status) {
  switch (status) {
    case "unpaid":
      return _ref;

    case "processing":
      return _ref2;

    case "notAvailable":
      return _ref3;

    default:
      return null;
  }
};

var _ref5 =
/*#__PURE__*/
React.createElement(_Reload.default, null);

var _ref6 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.badge.processing"
});

var _ref7 =
/*#__PURE__*/
React.createElement(_Alert.default, {
  size: "small"
});

var _ref8 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.badge.not_available"
});

var getBadge = function getBadge(status, price) {
  switch (status) {
    case "unpaid":
      return React.createElement(_Badge.default, {
        type: "warning",
        icon: React.createElement(_Money.default, {
          size: "small",
          dataTest: "CustomerBaggageTile-Badge-".concat(status)
        })
      }, React.createElement(_context.Consumer, null, function (_ref4) {
        var currency = _ref4.currency;
        return typeof price === "number" && React.createElement(_index.default, {
          t: "baggage_modal.badge.unpaid",
          values: {
            price: (0, _Currency.format)(currency, price)
          }
        });
      }));

    case "processing":
      return React.createElement(_Badge.default, {
        type: "info",
        icon: _ref5,
        dataTest: "CustomerBaggageTile-Badge-".concat(status)
      }, _ref6);

    case "notAvailable":
      return React.createElement(_Badge.default, {
        type: "dark",
        icon: _ref7,
        dataTest: "CustomerBaggageTile-Badge-".concat(status)
      }, _ref8);

    default:
      return null;
  }
};

var TitleBadge = function TitleBadge(_ref9) {
  var orderStatus = _ref9.orderStatus,
      price = _ref9.price;
  return React.createElement(_Tooltip.default, {
    content: getTooltipText(orderStatus),
    preferredPosition: "top",
    size: "small"
  }, React.createElement(React.Fragment, null, getBadge(orderStatus, price)));
};

var _default = TitleBadge;
exports.default = _default;