"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _setDate = _interopRequireDefault(require("date-fns/setDate"));

var _setMonth = _interopRequireDefault(require("date-fns/setMonth"));

var _setYear = _interopRequireDefault(require("date-fns/setYear"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _Theme = require("../../records/Theme");

var _Flex = _interopRequireDefault(require("../../primitives/Flex"));

var _calculateRanges2 = _interopRequireDefault(require("../../services/dates/calculateRanges"));

var _Dates = _interopRequireDefault(require("./Dates"));

var _Months = _interopRequireDefault(require("./Months"));

var _Years = _interopRequireDefault(require("./Years"));

var SelectContainer = _styledComponents.default.div.withConfig({
  displayName: "InputDate__SelectContainer",
  componentId: "sc-14pavqy-0"
})(["width:100%;margin:0 5px;&:first-child{margin-", ":0;}&:last-child{margin-", ":0;}"],
/* sc-custom "left" */
_rtl.left,
/* sc-custom "right" */
_rtl.right);

SelectContainer.defaultProps = {
  theme: _Theme.themeDefault
};

var InputDate =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(InputDate, _React$PureComponent);

  function InputDate() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, InputDate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InputDate)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChangeDate", function (ev) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value;
      onChange((0, _setDate.default)(value, Number(ev.target.value)));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChangeMonth", function (ev) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          value = _this$props2.value;
      onChange((0, _setMonth.default)(value, Number(ev.target.value)));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChangeYear", function (ev) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          value = _this$props3.value;
      onChange((0, _setYear.default)(value, Number(ev.target.value)));
    });
    return _this;
  }

  (0, _createClass2.default)(InputDate, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          id = _this$props4.id,
          value = _this$props4.value,
          min = _this$props4.min,
          max = _this$props4.max,
          format = _this$props4.format;

      var _calculateRanges = (0, _calculateRanges2.default)(min, max, value),
          dates = _calculateRanges.dates,
          months = _calculateRanges.months,
          years = _calculateRanges.years;

      var parts = {
        D: React.createElement(SelectContainer, {
          key: "D"
        }, React.createElement(_Dates.default, {
          id: id,
          value: value,
          onChange: this.handleChangeDate,
          dates: dates
        })),
        M: React.createElement(SelectContainer, {
          key: "M"
        }, React.createElement(_Months.default, {
          id: id,
          value: value,
          onChange: this.handleChangeMonth,
          months: months
        })),
        Y: React.createElement(SelectContainer, {
          key: "Y"
        }, React.createElement(_Years.default, {
          id: id,
          value: value,
          onChange: this.handleChangeYear,
          years: years
        }))
      };
      return React.createElement(_Flex.default, {
        x: "space-between"
      }, format.map(function (item) {
        return parts[item];
      }));
    }
  }]);
  return InputDate;
}(React.PureComponent);

(0, _defineProperty2.default)(InputDate, "defaultProps", {
  format: ["D", "M", "Y"]
});
var _default = InputDate;
exports.default = _default;