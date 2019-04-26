"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty2 = _interopRequireDefault(require("ramda/src/isEmpty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _InformationCircle = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/InformationCircle"));

var _ChevronDown = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/ChevronDown"));

var _Close = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Close"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Tooltip = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Tooltip"));

var _index = _interopRequireDefault(require("../Translate/index"));

var _Theme = require("../../records/Theme");

var _index2 = _interopRequireDefault(require("./components/Option/index"));

var _getPersonalItemPresence = _interopRequireDefault(require("./services/getPersonalItemPresence"));

var _getTooltip = _interopRequireDefault(require("./services/getTooltip"));

var _getOptions = _interopRequireDefault(require("./services/getOptions"));

var IconWrapper = _styledComponents.default.div.withConfig({
  displayName: "BaggagePicker__IconWrapper",
  componentId: "sc-1kqs4s4-0"
})(["height:20px;"]);

var EmptyOptionWrapper = _styledComponents.default.div.withConfig({
  displayName: "BaggagePicker__EmptyOptionWrapper",
  componentId: "sc-1kqs4s4-1"
})(["padding:", ";border-radius:", ";border:1px solid ", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceSmall;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.borderRadiusNormal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.borderColorCard;
});

EmptyOptionWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref5 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.subheader.cabin_baggage"
});

var _ref6 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.subheader.checked_baggage"
});

var _ref7 =
/*#__PURE__*/
_react.default.createElement(IconWrapper, null, _react.default.createElement(_InformationCircle.default, {
  size: "small",
  color: "secondary"
}));

var _ref8 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.subheader.select_option"
});

var _ref9 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.subheader.switch_option"
});

var _ref10 =
/*#__PURE__*/
_react.default.createElement(_Close.default, {
  size: "medium",
  color: "critical"
});

var _ref11 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.error.cabin_baggage_not_available"
});

var _ref12 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.error.checked_baggage_not_available"
});

var _ref13 =
/*#__PURE__*/
_react.default.createElement(_ChevronDown.default, null);

var BaggagePicker = function BaggagePicker(_ref4) {
  var changeBagCombination = _ref4.changeBagCombination,
      pickerType = _ref4.pickerType,
      passengerBaggage = _ref4.passengerBaggage,
      passengerCategory = _ref4.passengerCategory,
      shouldShowRecheckNote = _ref4.shouldShowRecheckNote,
      prioBoardingLinkHandler = _ref4.prioBoardingLinkHandler,
      context = _ref4.context,
      airlines = _ref4.airlines,
      currentCombination = _ref4.currentCombination,
      baggage = _ref4.baggage;

  var _useState = (0, _react.useState)((0, _getOptions.default)({
    baggage: baggage,
    passengerCategory: passengerCategory,
    context: context,
    pickerType: pickerType,
    currentCombination: currentCombination
  })),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(options.length > 4 ? options.slice(0, 3) : options),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      showedOptions = _useState4[0],
      setShowedOptions = _useState4[1];

  var _useState5 = (0, _react.useState)(options.length - showedOptions.length),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      numberOfHiddenOptions = _useState6[0],
      setNumberOfHiddenOptions = _useState6[1];

  var hasOnlyEmptyOption = options.length === 1 && (0, _isEmpty2.default)(options[0].items);
  (0, _react.useEffect)(function () {
    setOptions((0, _getOptions.default)({
      baggage: baggage,
      passengerCategory: passengerCategory,
      context: context,
      pickerType: pickerType,
      currentCombination: currentCombination
    }));
  }, [baggage, context, currentCombination, passengerCategory, pickerType]);
  (0, _react.useEffect)(function () {
    if (options.length > 4) {
      var optionsToShow = options.slice(0, 3);
      var hiddenOptionsLength = options.length - optionsToShow.length;
      setShowedOptions(optionsToShow);
      setNumberOfHiddenOptions(hiddenOptionsLength);
    } else {
      setShowedOptions(options);
      setNumberOfHiddenOptions(0);
    }
  }, [options, options.length]);

  var handleShowOptions = function handleShowOptions(opts) {
    setShowedOptions(opts);
    setNumberOfHiddenOptions(0);
  };

  return _react.default.createElement(_Stack.default, {
    spacing: "condensed",
    spaceAfter: "largest",
    dataTest: "BaggagePicker-".concat(pickerType)
  }, _react.default.createElement(_Stack.default, {
    flex: true,
    align: "center",
    spaceAfter: "medium",
    spacing: "tight"
  }, _react.default.createElement(_Text.default, {
    weight: "bold",
    uppercase: true,
    element: "p"
  }, pickerType === "handBag" ? _ref5 : _ref6), _react.default.createElement(_Tooltip.default, {
    content: (0, _getTooltip.default)(pickerType),
    preferredPosition: "right",
    size: "small"
  }, _ref7)), options.length > 0 && _react.default.createElement(_Text.default, null, context === "booking" ? _ref8 : _ref9), showedOptions.length > 0 && !hasOnlyEmptyOption ? showedOptions.map(function (item, index) {
    return _react.default.createElement(_index2.default, {
      key: item.originalIndex,
      airlines: airlines,
      dataTest: "BaggagePicker-Option-".concat(index),
      pickerType: pickerType,
      items: item.items,
      price: item.price,
      isChecked: item.originalIndex === passengerBaggage[pickerType],
      shouldShowRecheckNote: shouldShowRecheckNote,
      prioBoardingLinkHandler: prioBoardingLinkHandler,
      isCurrentCombination: item.originalIndex === currentCombination,
      onClick: function onClick() {
        return changeBagCombination(pickerType, item.originalIndex);
      },
      isPersonalItemPresent: (0, _getPersonalItemPresence.default)({
        pickerType: pickerType,
        options: options
      })
    });
  }) : _react.default.createElement(EmptyOptionWrapper, {
    "data-test": "BaggagePicker-EmptyOption"
  }, _react.default.createElement(_Stack.default, {
    flex: true,
    shrink: true,
    align: "center",
    spacing: "compact"
  }, _ref10, _react.default.createElement(_Stack.default, null, _react.default.createElement(_Text.default, {
    element: "p"
  }, pickerType === "handBag" ? _ref11 : _ref12)))), numberOfHiddenOptions > 0 && _react.default.createElement(_Stack.default, {
    flex: true,
    justify: "center",
    spacing: "none"
  }, _react.default.createElement(_Button.default, {
    dataTest: "BaggagePicker-ShowButton",
    onClick: function onClick() {
      return handleShowOptions(options);
    },
    size: "small",
    type: "secondary",
    icon: _ref13
  }, _react.default.createElement(_index.default, {
    t: "baggage_modal.select.show_more",
    values: {
      number: numberOfHiddenOptions
    }
  }))));
};

var _default = BaggagePicker;
exports.default = _default;