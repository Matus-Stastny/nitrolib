"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty2 = _interopRequireDefault(require("ramda/src/isEmpty"));

var _equals2 = _interopRequireDefault(require("ramda/src/equals"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _InformationCircle = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/InformationCircle"));

var _ChevronDown = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/ChevronDown"));

var _Close = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Close"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Tooltip = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Tooltip"));

var _index = _interopRequireDefault(require("../../../Translate/index"));

var _Theme = require("../../../../records/Theme");

var _Flex = _interopRequireDefault(require("../../../../primitives/Flex"));

var _index2 = _interopRequireDefault(require("../Option/index"));

var EmptyOption = _styledComponents.default.div.attrs({
  "data-test": "BaggagePicker-EmptyOption"
}).withConfig({
  displayName: "Picker__EmptyOption",
  componentId: "sc-1r7t6a0-0"
})(["display:flex;align-items:center;padding:", ";border-radius:", ";border:1px solid ", ";> *{margin-right:", ";}"], function (_ref) {
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
  displayName: "Picker__Title",
  componentId: "sc-1r7t6a0-1"
})(["display:flex;align-items:center;height:16px;> *{margin-right:", ";}span{display:flex;align-items:center;}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.spaceXXSmall;
});

Title.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref7 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.subheader.cabin_baggage"
});

var _ref8 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.subheader.checked_baggage"
});

var _ref9 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.tooltip.cabin_baggage"
});

var _ref10 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.tooltip.checked_baggage"
});

var _ref11 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.error.cabin_baggage_not_available"
});

var _ref12 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.error.checked_baggage_not_available"
});

var _ref13 =
/*#__PURE__*/
React.createElement(_InformationCircle.default, {
  size: "small",
  color: "secondary"
});

var _ref14 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.subheader.select_option"
});

var _ref15 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.subheader.switch_option"
});

var _ref16 =
/*#__PURE__*/
React.createElement(_Close.default, {
  size: "medium",
  color: "critical"
});

var _ref17 =
/*#__PURE__*/
React.createElement(_ChevronDown.default, null);

var BaggagePicker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(BaggagePicker, _React$Component);

  function BaggagePicker() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, BaggagePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BaggagePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      showedOptions: [],
      hiddenOptions: 0
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleDefaultStateValues", function (_ref6) {
      var options = _ref6.options;

      if (options.length > 4) {
        var showedOptionsItems = options.slice(0, 3);
        var hiddenOptionsItems = options.length - showedOptionsItems.length;

        _this.setState({
          showedOptions: showedOptionsItems,
          hiddenOptions: hiddenOptionsItems
        });
      } else {
        _this.setState({
          showedOptions: options,
          hiddenOptions: 0
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleShowOptions", function () {
      var options = _this.props.options;

      _this.setState({
        showedOptions: options,
        hiddenOptions: 0
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getTitle", function (type) {
      return type === "handBag" ? _ref7 : _ref8;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getTooltip", function (type) {
      return type === "handBag" ? _ref9 : _ref10;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getEmptyOptionText", function (type) {
      return type === "handBag" ? _ref11 : _ref12;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getPersonalItemPresence", function () {
      var _this$props = _this.props,
          pickerType = _this$props.pickerType,
          options = _this$props.options;
      if (pickerType === "holdBag") return false;
      return options.reduce(function (acc, option) {
        var items = (0, _values2.default)(option.items).map(function (item) {
          return item.category;
        });
        return [].concat((0, _toConsumableArray2.default)(acc), (0, _toConsumableArray2.default)(items));
      }, []).some(function (i) {
        return i === "personalItem";
      });
    });
    return _this;
  }

  (0, _createClass2.default)(BaggagePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleDefaultStateValues(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // eslint-disable-next-line
      if (!(0, _equals2.default)(this.props.options, prevProps.options)) {
        this.handleDefaultStateValues(this.props);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          context = _this$props2.context,
          pickerType = _this$props2.pickerType,
          options = _this$props2.options,
          selectedIndex = _this$props2.selectedIndex,
          currentCombination = _this$props2.currentCombination,
          onChange = _this$props2.onChange;
      var hasOnlyEmptyOption = options.length === 1 && (0, _isEmpty2.default)(options[0].items);
      var _this$state = this.state,
          showedOptions = _this$state.showedOptions,
          hiddenOptions = _this$state.hiddenOptions;
      return React.createElement(_Stack.default, {
        spacing: "condensed",
        spaceAfter: "largest",
        dataTest: "BaggagePicker-".concat(pickerType)
      }, React.createElement(Title, null, React.createElement(_Text.default, {
        weight: "bold",
        uppercase: true,
        element: "p"
      }, this.getTitle(pickerType)), React.createElement(_Tooltip.default, {
        content: this.getTooltip(pickerType),
        preferredPosition: "right",
        size: "small"
      }, _ref13)), options.length > 0 && React.createElement(_Text.default, null, context === "booking" ? _ref14 : _ref15, ":"), options.length > 0 && !hasOnlyEmptyOption ? showedOptions.map(function (item, index) {
        return React.createElement(_index2.default, {
          key: item.originalIndex,
          dataTest: "BaggagePicker-Option-".concat(index),
          pickerType: pickerType,
          items: item.items,
          price: item.price,
          isChecked: item.originalIndex === selectedIndex,
          isCurrentCombination: item.originalIndex === currentCombination,
          onClick: function onClick() {
            return onChange(pickerType, item.originalIndex);
          },
          isPersonalItemPresent: _this2.getPersonalItemPresence()
        });
      }) : React.createElement(EmptyOption, null, _ref16, React.createElement(_Text.default, null, this.getEmptyOptionText(pickerType))), hiddenOptions > 0 && React.createElement(_Flex.default, {
        x: "center"
      }, React.createElement(_Button.default, {
        dataTest: "BaggagePicker-ShowButton",
        onClick: this.handleShowOptions,
        size: "small",
        type: "secondary",
        icon: _ref17
      }, React.createElement(_index.default, {
        t: "baggage_modal.select.show_more",
        values: {
          number: hiddenOptions
        }
      }))));
    }
  }]);
  return BaggagePicker;
}(React.Component);

var _default = BaggagePicker;
exports.default = _default;