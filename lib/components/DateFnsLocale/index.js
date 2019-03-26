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

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var DateFnsLocale =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(DateFnsLocale, _React$PureComponent);

  function DateFnsLocale() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DateFnsLocale);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DateFnsLocale)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      locale: null
    });
    return _this;
  }

  (0, _createClass2.default)(DateFnsLocale, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var getLocale = this.props.getLocale;
      getLocale.then(function (locale) {
        _this2.setState({
          locale: locale
        });
      }).catch(function () {
        _this2.setState({
          locale: _enUS.default
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var locale = this.state.locale;

      if (!locale) {
        return null;
      }

      return children(locale);
    }
  }]);
  return DateFnsLocale;
}(React.PureComponent);

exports.default = DateFnsLocale;