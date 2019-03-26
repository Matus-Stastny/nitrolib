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

var _Airplane = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Airplane"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _InputText = _interopRequireDefault(require("../InputText"));

var _IconText = _interopRequireDefault(require("../IconText"));

var _ClickOutside = _interopRequireDefault(require("../ClickOutside"));

var _Translate = _interopRequireDefault(require("../Translate"));

var _context = require("../../services/intl/context");

var _Theme = require("../../records/Theme");

var _AirportListData = _interopRequireDefault(require("./AirportListData"));

var Container = _styledComponents.default.div.withConfig({
  displayName: "IataPicker__Container",
  componentId: "w1ap52-0"
})(["position:relative;"]);

var ResultWrapper = _styledComponents.default.div.withConfig({
  displayName: "IataPicker__ResultWrapper",
  componentId: "w1ap52-1"
})(["position:absolute;top:74px;", ":0;width:100%;max-height:300px;overflow-y:scroll;z-index:2;box-shadow:0 0 1px rgba(0,0,0,0.16),0 1px 32px rgba(0,0,0,0.32);background:", ";"], _rtl.left, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteWhite;
});

ResultWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref3 =
/*#__PURE__*/
React.createElement(_IconText.default, {
  icon: React.createElement(_Airplane.default, {
    color: "primary",
    size: "small"
  })
}, React.createElement(_Translate.default, {
  t: "common.iata_code"
}));

var IataPicker =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(IataPicker, _React$PureComponent);

  function IataPicker() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, IataPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IataPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      open: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (_ref2) {
      var value = _ref2.value;
      var onSelect = _this.props.onSelect;
      onSelect(value);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSelect", function (value) {
      var onSelect = _this.props.onSelect;

      _this.setState({
        open: false
      });

      onSelect(value);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleFocus", function () {
      _this.setState({
        open: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleKeyDown", function (ev) {
      if (ev.key === "Tab") {
        _this.setState({
          open: false
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClickOutside", function () {
      _this.setState({
        open: false
      });
    });
    return _this;
  }

  (0, _createClass2.default)(IataPicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          value = _this$props.value,
          error = _this$props.error,
          showState = _this$props.showState;
      var open = this.state.open;
      return React.createElement(_context.Consumer, null, function (intl) {
        return React.createElement(_ClickOutside.default, {
          active: open,
          onClickOutside: _this2.handleClickOutside
        }, React.createElement(Container, null, _ref3, React.createElement(_InputText.default, {
          id: id,
          value: value,
          onChange: _this2.handleChange,
          onFocus: _this2.handleFocus,
          onKeyDown: _this2.handleKeyDown,
          placeholder: intl.translate("common.iata_airport_placeholder"),
          error: intl.translate(error),
          showState: showState
        }), open && value !== "" && React.createElement(ResultWrapper, null, React.createElement(_AirportListData.default, {
          value: value,
          onSelect: _this2.handleSelect
        }))));
      });
    }
  }]);
  return IataPicker;
}(React.PureComponent);

exports.default = IataPicker;
(0, _defineProperty2.default)(IataPicker, "defaultProps", {
  showState: false
});