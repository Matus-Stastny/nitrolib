"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _context = require("../../services/currency/context");

var _NativePicker = _interopRequireDefault(require("./components/NativePicker"));

var _CustomPicker = _interopRequireDefault(require("../CustomPicker"));

var _Currency = require("../../records/Currency");

var _Current = _interopRequireDefault(require("./components/Current"));

var _Menu = _interopRequireDefault(require("./components/Menu"));

var _LogMount = _interopRequireDefault(require("../LogMount"));

var _events = require("./consts/events");

var _ref3 =
/*#__PURE__*/
React.createElement(_LogMount.default, {
  event: _events.CURRENCY_OPEN
});

var Currency = function Currency(_ref) {
  var native = _ref.native,
      loading = _ref.loading,
      positionMenuDesktop = _ref.positionMenuDesktop,
      positionMenuTablet = _ref.positionMenuTablet,
      inverted = _ref.inverted,
      onSetModal = _ref.onSetModal;
  return React.createElement(_context.Consumer, null, function (_ref2) {
    var currency = _ref2.currency,
        available = _ref2.available,
        recommended = _ref2.recommended,
        onChange = _ref2.onChange;

    if (currency === _Currency.currencyDefault) {
      return loading;
    }

    var availableList = (0, _Currency.getAvailableList)(available);
    return React.createElement("section", {
      "data-test": "Currency"
    }, native ? React.createElement(_NativePicker.default, {
      current: currency,
      available: availableList,
      recommended: recommended,
      onChange: onChange
    }) : React.createElement(_CustomPicker.default, {
      onChange: onChange,
      openButton: React.createElement(_Current.default, {
        current: currency,
        inverted: inverted
      })
    }, function (render) {
      return React.createElement(React.Fragment, null, _ref3, React.createElement(_Menu.default, {
        onChange: render.onChange,
        current: currency,
        available: availableList,
        recommended: recommended,
        positionMenuDesktop: positionMenuDesktop,
        positionMenuTablet: positionMenuTablet,
        onSetModal: onSetModal
      }));
    }));
  });
};

Currency.defaultProps = {
  native: false,
  loading: null
};
var _default = Currency;
exports.default = _default;