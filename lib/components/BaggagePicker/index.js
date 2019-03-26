"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Picker = _interopRequireDefault(require("./components/Picker"));

var _context = require("./services/context");

var _utils = require("../../services/baggage/utils");

var BaggagePicker = function BaggagePicker(props) {
  var changeBagCombination = props.changeBagCombination,
      pickerType = props.pickerType,
      passengerBaggage = props.passengerBaggage,
      passengerCategory = props.passengerCategory,
      shouldShowRecheckNote = props.shouldShowRecheckNote,
      prioBoardingLinkHandler = props.prioBoardingLinkHandler,
      context = props.context,
      airlines = props.airlines,
      currentCombination = props.currentCombination,
      baggage = props.baggage;
  var baggageOptions = (0, _utils.getOptions)({
    baggage: baggage,
    passengerCategory: passengerCategory,
    context: context,
    pickerType: pickerType,
    currentCombination: currentCombination
  });
  return React.createElement(_context.Provider, {
    value: {
      airlines: airlines,
      shouldShowRecheckNote: shouldShowRecheckNote,
      prioBoardingLinkHandler: prioBoardingLinkHandler
    }
  }, React.createElement(_Picker.default, {
    context: context,
    pickerType: pickerType,
    options: baggageOptions,
    selectedIndex: passengerBaggage[pickerType],
    onChange: changeBagCombination,
    currentCombination: currentCombination
  }));
};

var _default = BaggagePicker;
exports.default = _default;