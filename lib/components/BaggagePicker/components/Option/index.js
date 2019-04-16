"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _head2 = _interopRequireDefault(require("ramda/src/head"));

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _BaggagePersonalItemNone = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/BaggagePersonalItemNone"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Radio = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Radio"));

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Alert"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _PriorityBoardingInfo = _interopRequireDefault(require("./components/PriorityBoardingInfo"));

var _EmptyLabel = _interopRequireDefault(require("./components/EmptyLabel"));

var _index = _interopRequireDefault(require("../../../Translate/index"));

var _index2 = _interopRequireDefault(require("../OptionItem/index"));

var _Theme = require("../../../../records/Theme");

var _getAirlinesWithPriorityBoarding = _interopRequireDefault(require("./services/getAirlinesWithPriorityBoarding"));

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Option__Wrapper",
  componentId: "o4s9ec-0"
})(["background-color:", ";padding:", ";box-shadow:0 1px 2px 0 ", ";border:solid 2px ", ";border-radius:", ";outline:solid 1px white;outline-offset:", ";&:hover{cursor:pointer;border-color:", ";outline-offset:-3px;}> *:not(:last-child){margin-bottom:12px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteWhite;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.spaceSmall;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.paletteWhiteHover;
}, function (_ref4) {
  var theme = _ref4.theme,
      checked = _ref4.checked;
  return checked ? "".concat(theme.orbit.colorTextButtonPrimaryBordered) : "".concat(theme.orbit.borderColorCard);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.borderRadiusNormal;
}, function (_ref6) {
  var checked = _ref6.checked;
  return checked ? "-3px" : "-2px";
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.orbit.borderColorCheckboxRadioHover;
});

Wrapper.defaultProps = {
  dataTest: "BaggagePicker-Option",
  theme: _Theme.themeDefault,
  checked: false
};

var RadioWrapper = _styledComponents.default.div.withConfig({
  displayName: "Option__RadioWrapper",
  componentId: "o4s9ec-1"
})(["width:20px;div{margin-top:2px;}"]);

var IconWrapper = _styledComponents.default.div.withConfig({
  displayName: "Option__IconWrapper",
  componentId: "o4s9ec-2"
})(["border-top:1px solid ", ";min-width:24px;text-align:center;padding:6px 0px;", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.borderColorInput;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["padding:4px 0px;"])));

IconWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref10 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.select.no_personal_item"
});

var _ref11 =
/*#__PURE__*/
React.createElement(_Alert.default, {
  dataTest: "BaggagePicker-RecheckAlert"
}, React.createElement(_index.default, {
  t: "baggage_modal.alert.collect_and_recheck"
}));

var Option = function Option(_ref9) {
  var items = _ref9.items,
      price = _ref9.price,
      dataTest = _ref9.dataTest,
      isChecked = _ref9.isChecked,
      onClick = _ref9.onClick,
      isCurrentCombination = _ref9.isCurrentCombination,
      pickerType = _ref9.pickerType,
      isPersonalItemPresent = _ref9.isPersonalItemPresent,
      airlines = _ref9.airlines,
      shouldShowRecheckNote = _ref9.shouldShowRecheckNote,
      prioBoardingLinkHandler = _ref9.prioBoardingLinkHandler;
  var itemsArr = (0, _values2.default)(items);
  var firstItem = (0, _head2.default)(itemsArr);
  var priorityAirlines = (0, _getAirlinesWithPriorityBoarding.default)(itemsArr).map(function (key) {
    return airlines === null || airlines === void 0 ? void 0 : airlines[key];
  }).filter(Boolean);
  return React.createElement(Wrapper, {
    onClick: onClick,
    checked: isChecked,
    "data-test": dataTest
  }, React.createElement(_Stack.default, {
    flex: true
  }, React.createElement(RadioWrapper, null, React.createElement(_Radio.default, {
    checked: isChecked,
    onChange: onClick
  })), React.createElement(_Stack.default, {
    shrink: true,
    flex: true,
    spacing: "extraTight",
    direction: "column"
  }, itemsArr.length > 0 ? itemsArr.map(function (item, index) {
    return React.createElement(_index2.default, {
      key: index // eslint-disable-line
      ,
      amount: item.amount,
      restrictions: item.restrictions,
      category: item.category,
      isFirstItem: index === 0,
      price: price,
      isCurrentCombination: isCurrentCombination
    });
  }) : React.createElement(_EmptyLabel.default, {
    pickerType: pickerType,
    isCurrentCombination: isCurrentCombination
  }), (firstItem === null || firstItem === void 0 ? void 0 : firstItem.category) === "cabinBag" && isPersonalItemPresent && React.createElement(_Stack.default, {
    flex: true,
    align: "center",
    spacing: "tight",
    dataTest: "BaggagePicker-NoPersonalItemLabel"
  }, React.createElement(_BaggagePersonalItemNone.default, {
    color: isChecked ? "warning" : "secondary"
  }), React.createElement(_Text.default, {
    type: isChecked ? "warning" : "secondary"
  }, _ref10)), priorityAirlines.length > 0 && React.createElement(_PriorityBoardingInfo.default, {
    airlines: priorityAirlines,
    prioBoardingLinkHandler: prioBoardingLinkHandler
  }))), shouldShowRecheckNote && (firstItem === null || firstItem === void 0 ? void 0 : firstItem.category) === "holdBag" && isChecked && _ref11);
};

var _default = Option;
exports.default = _default;