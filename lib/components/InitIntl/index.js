"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _identity2 = _interopRequireDefault(require("ramda/src/identity"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _translate = _interopRequireDefault(require("../../services/intl/translate"));

var InitIntl =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(InitIntl, _React$PureComponent);

  function InitIntl() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, InitIntl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InitIntl)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      debug: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleDebug", function () {
      _this.setState(function (state) {
        return {
          debug: !state.debug
        };
      });
    });
    return _this;
  }

  (0, _createClass2.default)(InitIntl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          raw = _this$props.raw,
          getLocale = _this$props.getLocale,
          children = _this$props.children;
      var debug = this.state.debug;

      var t = function t(key, values) {
        return (0, _translate.default)(raw.translations, key, values);
      };

      return children({
        language: raw.language,
        translations: raw.translations,
        translate: debug ? _identity2.default : t,
        getLocale: getLocale,
        onDebug: this.handleDebug
      });
    }
  }]);
  return InitIntl;
}(React.PureComponent);

exports.default = InitIntl;
(0, _defineProperty2.default)(InitIntl, "defaultProps", {
  getLocale: Promise.resolve(_enUS.default)
});