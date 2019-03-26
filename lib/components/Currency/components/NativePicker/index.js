"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map2 = _interopRequireDefault(require("ramda/src/map"));

var React = _interopRequireWildcard(require("react"));

var _Exchange = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Exchange"));

var _Currency = require("../../../../records/Currency");

var _index = _interopRequireDefault(require("../../../NativeGroupedSelect/index"));

var mapCurrencies = (0, _map2.default)(function (currency) {
  return {
    value: currency.id,
    text: "".concat((0, _Currency.getCode)(currency.id), " - ").concat((0, _Currency.getSymbol)(currency.format))
  };
});

var _ref2 =
/*#__PURE__*/
React.createElement(_Exchange.default, {
  className: "CurrencySwitcher-icon",
  size: "small"
});

var NativePicker = function NativePicker(_ref) {
  var current = _ref.current,
      available = _ref.available,
      recommended = _ref.recommended,
      onChange = _ref.onChange;
  return React.createElement(_index.default, {
    value: current.id,
    groups: [{
      key: "current",
      items: [{
        value: current.id,
        text: "".concat((0, _Currency.getCode)(current.id), " - ").concat((0, _Currency.getSymbol)(current.format))
      }]
    }, {
      key: "recommended",
      items: mapCurrencies(recommended)
    }, {
      key: "all",
      items: mapCurrencies(available)
    }],
    icon: _ref2,
    onChange: onChange
  });
};

var _default = NativePicker;
exports.default = _default;