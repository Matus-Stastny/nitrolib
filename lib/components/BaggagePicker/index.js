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

var _Flex = _interopRequireDefault(require("../../primitives/Flex"));

var _index2 = _interopRequireDefault(require("./components/Option/index"));

var _getPersonalItemPresence = _interopRequireDefault(require("./services/getPersonalItemPresence"));

var _getTooltip = _interopRequireDefault(require("./services/getTooltip"));

var _getOptions = _interopRequireDefault(require("./services/getOptions"));

var EmptyOption = _styledComponents.default.div.withConfig({
  displayName: "BaggagePicker__EmptyOption",
  componentId: "sc-1kqs4s4-0"
})(["display:flex;align-items:center;padding:", ";border-radius:", ";border:1px solid ", ";> svg,> p{margin-right:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceSmall;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.borderRadiusNormal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.borderColorCard;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.spaceSmall;
});

EmptyOption.defaultProps = {
  theme: _Theme.themeDefault
};

var Title = _styledComponents.default.div.withConfig({
  displayName: "BaggagePicker__Title",
  componentId: "sc-1kqs4s4-1"
})(["display:flex;align-items:center;height:16px;> p{margin-right:", ";}span{display:flex;align-items:center;}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.spaceXXSmall;
});

Title.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref7 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.subheader.cabin_baggage"
});

var _ref8 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.subheader.checked_baggage"
});

var _ref9 =
/*#__PURE__*/
_react.default.createElement(_InformationCircle.default, {
  size: "small",
  color: "secondary"
});

var _ref10 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.subheader.select_option"
});

var _ref11 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.subheader.switch_option"
});

var _ref12 =
/*#__PURE__*/
_react.default.createElement(_Close.default, {
  size: "medium",
  color: "critical"
});

var _ref13 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.error.cabin_baggage_not_available"
});

var _ref14 =
/*#__PURE__*/
_react.default.createElement(_index.default, {
  t: "baggage_modal.error.checked_baggage_not_available"
});

var _ref15 =
/*#__PURE__*/
_react.default.createElement(_ChevronDown.default, null);

var BaggagePicker = function BaggagePicker(_ref6) {
  var changeBagCombination = _ref6.changeBagCombination,
      pickerType = _ref6.pickerType,
      passengerBaggage = _ref6.passengerBaggage,
      passengerCategory = _ref6.passengerCategory,
      shouldShowRecheckNote = _ref6.shouldShowRecheckNote,
      prioBoardingLinkHandler = _ref6.prioBoardingLinkHandler,
      context = _ref6.context,
      airlines = _ref6.airlines,
      currentCombination = _ref6.currentCombination,
      baggage = _ref6.baggage;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showedOptions = _useState2[0],
      setShowedOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      numberOfHiddenOptions = _useState4[0],
      setNumberOfHiddenOptions = _useState4[1];

  var _useState5 = (0, _react.useState)((0, _getOptions.default)({
    baggage: baggage,
    passengerCategory: passengerCategory,
    context: context,
    pickerType: pickerType,
    currentCombination: currentCombination
  })),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 1),
      options = _useState6[0];

  var hasOnlyEmptyOption = options.length === 1 && (0, _isEmpty2.default)(options[0].items);
  var isPersonalItemPresent = (0, _getPersonalItemPresence.default)({
    pickerType: pickerType,
    options: options
  });
  (0, _react.useEffect)(function () {
    function handleDefaultStateValues() {
      if (options.length > 4) {
        var optionsToShow = options.slice(0, 3);
        var hiddenOptionsLength = options.length - optionsToShow.length;
        setShowedOptions(optionsToShow);
        setNumberOfHiddenOptions(hiddenOptionsLength);
      } else {
        setShowedOptions(options);
        setNumberOfHiddenOptions(0);
      }
    }

    handleDefaultStateValues();
  }, [options, options.length]);

  var handleShowOptions = function handleShowOptions(opts) {
    setShowedOptions(opts);
    setNumberOfHiddenOptions(0);
  };

  return _react.default.createElement(_Stack.default, {
    spacing: "condensed",
    spaceAfter: "largest",
    dataTest: "BaggagePicker-".concat(pickerType)
  }, _react.default.createElement(Title, null, _react.default.createElement(_Text.default, {
    weight: "bold",
    uppercase: true,
    element: "p"
  }, pickerType === "handBag" ? _ref7 : _ref8), _react.default.createElement(_Tooltip.default, {
    content: (0, _getTooltip.default)(pickerType),
    preferredPosition: "right",
    size: "small"
  }, _ref9)), options.length > 0 && _react.default.createElement(_Text.default, null, context === "booking" ? _ref10 : _ref11), options.length > 0 && !hasOnlyEmptyOption ? showedOptions.map(function (item, index) {
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
      isPersonalItemPresent: isPersonalItemPresent
    });
  }) : _react.default.createElement(EmptyOption, {
    "data-test": "BaggagePicker-EmptyOption"
  }, _ref12, _react.default.createElement(_Text.default, {
    element: "p"
  }, pickerType === "handBag" ? _ref13 : _ref14)), numberOfHiddenOptions > 0 && _react.default.createElement(_Flex.default, {
    x: "center"
  }, _react.default.createElement(_Button.default, {
    dataTest: "BaggagePicker-ShowButton",
    onClick: function onClick() {
      return handleShowOptions(options);
    },
    size: "small",
    type: "secondary",
    icon: _ref15
  }, _react.default.createElement(_index.default, {
    t: "baggage_modal.select.show_more",
    values: {
      number: numberOfHiddenOptions
    }
  }))));
};

var _default = BaggagePicker;
exports.default = _default;