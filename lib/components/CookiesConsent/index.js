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

var _CookiesBanner = _interopRequireDefault(require("./components/CookiesBanner"));

var CookiesConsent =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(CookiesConsent, _React$PureComponent);

  function CookiesConsent() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CookiesConsent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CookiesConsent)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      accepted: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleAccept", function () {
      var onAccept = _this.props.onAccept;

      _this.setState({
        accepted: true
      });

      onAccept();
    });
    return _this;
  }

  (0, _createClass2.default)(CookiesConsent, [{
    key: "render",
    value: function render() {
      var accepted = this.state.accepted;

      if (accepted) {
        return null;
      }

      return React.createElement("section", {
        "data-test": "CookiesConsent"
      }, React.createElement(_CookiesBanner.default, {
        onAccept: this.handleAccept
      }));
    }
  }]);
  return CookiesConsent;
}(React.PureComponent);

var _default = CookiesConsent;
exports.default = _default;