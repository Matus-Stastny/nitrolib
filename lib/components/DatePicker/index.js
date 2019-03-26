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

var _InputField = _interopRequireDefault(require("@kiwicom/orbit-components/lib/InputField"));

var _setDate = _interopRequireDefault(require("date-fns/setDate"));

var _addMonths = _interopRequireDefault(require("date-fns/addMonths"));

var _isWithinInterval = _interopRequireDefault(require("date-fns/isWithinInterval"));

var _endOfMonth = _interopRequireDefault(require("date-fns/endOfMonth"));

var _startOfMonth = _interopRequireDefault(require("date-fns/startOfMonth"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _LangInfo = require("../../records/LangInfo");

var _index = _interopRequireDefault(require("./components/Calendar/index"));

var _ClickOutside = _interopRequireDefault(require("../ClickOutside"));

var _DatePickerWrapper = _interopRequireDefault(require("./primitives/DatePickerWrapper"));

var _context = require("../../services/intl/context");

var DatePicker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DatePicker, _React$Component);

  function DatePicker() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      active: false,
      // eslint-disable-next-line react/destructuring-assignment
      viewing: _this.props.value
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleOpen", function () {
      _this.setState({
        active: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClose", function () {
      _this.setState({
        active: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSelect", function (day) {
      var onChange = _this.props.onChange;
      var viewing = _this.state.viewing;

      _this.handleClose();

      _this.setState({
        viewing: (0, _setDate.default)(viewing, day)
      });

      onChange((0, _setDate.default)(viewing, day));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleDecrease", function () {
      var viewing = _this.state.viewing;
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max;
      var viewingNew = (0, _addMonths.default)(viewing, -1);

      if (!(0, _isWithinInterval.default)(viewingNew, {
        start: (0, _startOfMonth.default)(min),
        end: (0, _endOfMonth.default)(max)
      })) {
        return;
      }

      _this.setState({
        viewing: viewingNew
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleIncrease", function () {
      var viewing = _this.state.viewing;
      var _this$props2 = _this.props,
          min = _this$props2.min,
          max = _this$props2.max;
      var viewingNew = (0, _addMonths.default)(viewing, 1);

      if (!(0, _isWithinInterval.default)(viewingNew, {
        start: (0, _startOfMonth.default)(min),
        end: (0, _endOfMonth.default)(max)
      })) {
        return;
      }

      _this.setState({
        viewing: viewingNew
      });
    });
    return _this;
  }

  (0, _createClass2.default)(DatePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          value = _this$props3.value,
          min = _this$props3.min,
          max = _this$props3.max,
          label = _this$props3.label,
          icon = _this$props3.icon;
      var _this$state = this.state,
          active = _this$state.active,
          viewing = _this$state.viewing;
      return React.createElement(_ClickOutside.default, {
        active: active,
        onClickOutside: this.handleClose
      }, React.createElement(_DatePickerWrapper.default, {
        active: active
      }, React.createElement(_context.Consumer, null, function (intl) {
        return React.createElement(React.Fragment, null, React.createElement(_InputField.default, {
          inlineLabel: true,
          value: (0, _format.default)(value, (0, _LangInfo.fixDateFormat)(intl.language.dateFormat)),
          maxLength: 0,
          readOnly: true,
          onFocus: _this2.handleOpen,
          label: label,
          prefix: icon
        }), active && React.createElement(_index.default, {
          value: value,
          viewing: viewing,
          min: min,
          max: max,
          onSelect: _this2.handleSelect,
          onDecrease: _this2.handleDecrease,
          onIncrease: _this2.handleIncrease
        }));
      })));
    }
  }]);
  return DatePicker;
}(React.Component);

exports.default = DatePicker;