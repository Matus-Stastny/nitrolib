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

var _AccountLogin = _interopRequireDefault(require("../../../AccountLogin"));

var _CheckEmail = _interopRequireDefault(require("../../mutations/CheckEmail"));

var _errors = _interopRequireDefault(require("../../../../consts/errors"));

var _Text = _interopRequireDefault(require("../../../Text"));

var events = _interopRequireWildcard(require("../../../../consts/events"));

var _context = _interopRequireDefault(require("../../../../services/log/context"));

var validators = _interopRequireWildcard(require("../../../../services/input/validators"));

var IntroScreen =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(IntroScreen, _React$Component);

  function IntroScreen() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, IntroScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IntroScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      error: null,
      isLoading: false,
      validateEmail: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleEmailBlur", function () {
      _this.setState({
        validateEmail: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleCheckEmail", function (e) {
      var _this$props = _this.props,
          email = _this$props.email,
          brandId = _this$props.brandId,
          onChangeScreen = _this$props.onChangeScreen,
          onSendMagicLink = _this$props.onSendMagicLink;
      var log = _this.context.log;
      e.preventDefault();

      if (_this.validateInput()) {
        return;
      }

      _this.setState({
        isLoading: true,
        error: ""
      });

      log(events.API_REQUEST, {
        operation: "checkEmail"
      });
      (0, _CheckEmail.default)(email, brandId).then(function (res) {
        var _res$checkEmail;

        _this.setState({
          isLoading: false
        });

        var result = (_res$checkEmail = res.checkEmail) === null || _res$checkEmail === void 0 ? void 0 : _res$checkEmail.result;

        if (!result) {
          log(events.API_REQUEST_FAILED, {
            operation: "checkEmail"
          });

          _this.setState({
            error: _errors.default.general
          });

          return;
        }

        log(events.API_SUCCESS, {
          operation: "checkEmail"
        });

        if (result.hasFacebook) {
          onChangeScreen("facebookLogin");
          return;
        }

        if (result.hasGoogle) {
          onChangeScreen("googleLogin");
          return;
        }

        if (result.hasKiwiAccount) {
          onChangeScreen("kiwiLogin");
          return;
        }

        if (result.hasBooking) {
          onSendMagicLink();
          return;
        }

        onChangeScreen("noAccount");
      }).catch(function (err) {
        log(events.API_ERROR, {
          error: String(err),
          operation: "checkEmail"
        });

        _this.setState({
          isLoading: false,
          error: _errors.default.general
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "validateInput", function () {
      var email = _this.props.email;
      var error = email ? validators.email(email) : _errors.default.requiredField;

      _this.setState({
        error: error,
        validateEmail: true
      });

      return Boolean(error);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getEmailError", function () {
      var email = _this.props.email;
      var validateEmail = _this.state.validateEmail;

      if (!validateEmail) {
        return "";
      }

      return email ? validators.email(email) : _errors.default.requiredField;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "context", void 0);
    return _this;
  }

  (0, _createClass2.default)(IntroScreen, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          email = _this$props2.email,
          type = _this$props2.type,
          disableSocialLogin = _this$props2.disableSocialLogin,
          magicLinkError = _this$props2.magicLinkError,
          onGoogleLogin = _this$props2.onGoogleLogin,
          onFacebookLogin = _this$props2.onFacebookLogin,
          onEmailChange = _this$props2.onEmailChange;
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          error = _this$state.error;
      var submitError = error || magicLinkError;
      return React.createElement(_AccountLogin.default, {
        email: email,
        error: submitError ? React.createElement(_Text.default, {
          t: submitError
        }) : null,
        emailError: this.getEmailError(),
        isLoading: isLoading,
        type: type,
        disableSocialLogin: disableSocialLogin,
        onEmailChange: onEmailChange,
        onEmailBlur: this.handleEmailBlur,
        onGoogleLogin: onGoogleLogin,
        onFacebookLogin: onFacebookLogin,
        onContinue: this.handleCheckEmail
      });
    }
  }]);
  return IntroScreen;
}(React.Component);

exports.default = IntroScreen;
(0, _defineProperty2.default)(IntroScreen, "contextType", _context.default);