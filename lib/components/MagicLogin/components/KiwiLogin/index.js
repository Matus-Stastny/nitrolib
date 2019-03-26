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

var _Text = _interopRequireDefault(require("../../../Text"));

var _AccountPassword = _interopRequireDefault(require("../../../AccountPassword"));

var _SignIn = _interopRequireDefault(require("../../mutations/SignIn"));

var _ResetPassword = _interopRequireDefault(require("../../mutations/ResetPassword"));

var _errors = _interopRequireDefault(require("../../../../consts/errors"));

var _toUser = _interopRequireDefault(require("../../services/toUser"));

var _context = _interopRequireDefault(require("../../../../services/log/context"));

var loginEvents = _interopRequireWildcard(require("../../consts/events"));

var _events2 = require("../../../../consts/events");

var KiwiLoginScreen =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(KiwiLoginScreen, _React$Component);

  function KiwiLoginScreen() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, KiwiLoginScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(KiwiLoginScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      error: null,
      password: "",
      passwordError: "",
      isSigningIn: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSignIn", function (e) {
      var _this$props = _this.props,
          email = _this$props.email,
          brandId = _this$props.brandId,
          onResetMagicLinkError = _this$props.onResetMagicLinkError,
          onSignIn = _this$props.onSignIn,
          onClose = _this$props.onClose;
      var password = _this.state.password;
      var log = _this.context.log;
      e.preventDefault();
      onResetMagicLinkError();

      if (_this.validateInput()) {
        return;
      }

      _this.setState({
        isSigningIn: true,
        error: null,
        passwordError: ""
      });

      (0, _SignIn.default)(email, password, brandId).then(function (res) {
        var _res$signIn;

        _this.setState({
          isSigningIn: false
        });

        var user = (_res$signIn = res.signIn) === null || _res$signIn === void 0 ? void 0 : _res$signIn.user;

        if (!user) {
          log(_events2.API_REQUEST_FAILED, {
            operation: "signIn"
          });

          _this.setState({
            error: _errors.default.loginFailed
          });

          return;
        }

        onSignIn((0, _toUser.default)(user));
        onClose(true);
        log(loginEvents.LOGGED_WITH_ACCOUNT, {});
      }).catch(function (err) {
        log(_events2.API_ERROR, {
          error: String(err),
          operation: "signIn"
        });

        _this.setState({
          error: _errors.default.general,
          isSigningIn: false
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSignInLink", function () {
      var onAskSignInLink = _this.props.onAskSignInLink;
      var log = _this.context.log;
      log(loginEvents.ASK_FOR_MAGIC_LINK, {});
      onAskSignInLink();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChangeEmail", function () {
      var onChangeScreen = _this.props.onChangeScreen;
      var log = _this.context.log;
      log(loginEvents.CHANGE_EMAIL, {});
      onChangeScreen("intro");
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handlePasswordChange", function (e) {
      _this.setState({
        password: e.target.value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleForgotPassword", function () {
      var _this$props2 = _this.props,
          email = _this$props2.email,
          brandId = _this$props2.brandId,
          onChangeScreen = _this$props2.onChangeScreen;
      var log = _this.context.log;

      _this.setState({
        error: null,
        passwordError: ""
      });

      (0, _ResetPassword.default)(email, brandId).then(function (res) {
        var _res$resetPassword;

        if (!((_res$resetPassword = res.resetPassword) === null || _res$resetPassword === void 0 ? void 0 : _res$resetPassword.success)) {
          log(_events2.API_REQUEST_FAILED, {
            operation: "resetPassword"
          });

          _this.setState({
            error: _errors.default.general
          });

          return;
        }

        onChangeScreen("resetPassword");
      }).catch(function (err) {
        log(_events2.API_ERROR, {
          error: String(err),
          operation: "resetPassword"
        });

        _this.setState({
          error: _errors.default.general
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "validateInput", function () {
      var password = _this.state.password;

      if (!password) {
        _this.setState({
          error: _errors.default.requiredField,
          passwordError: _errors.default.requiredField
        });
      }

      return !password;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "context", void 0);
    return _this;
  }

  (0, _createClass2.default)(KiwiLoginScreen, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var onResetMagicLinkError = this.props.onResetMagicLinkError;
      onResetMagicLinkError();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          email = _this$props3.email,
          magicLinkError = _this$props3.magicLinkError,
          isSendingEmail = _this$props3.isSendingEmail;
      var _this$state = this.state,
          error = _this$state.error,
          password = _this$state.password,
          isSigningIn = _this$state.isSigningIn,
          passwordError = _this$state.passwordError;
      var formError = error || magicLinkError;
      return React.createElement(_AccountPassword.default, {
        email: email,
        error: formError ? React.createElement(_Text.default, {
          t: formError
        }) : null,
        isSigningIn: isSigningIn,
        isSendingEmail: isSendingEmail,
        password: password,
        passwordError: passwordError,
        onChangeEmail: this.handleChangeEmail,
        onAskSignInLink: this.handleSignInLink,
        onForgotPassword: this.handleForgotPassword,
        onPasswordChange: this.handlePasswordChange,
        onSignIn: this.handleSignIn
      });
    }
  }]);
  return KiwiLoginScreen;
}(React.Component);

exports.default = KiwiLoginScreen;
(0, _defineProperty2.default)(KiwiLoginScreen, "contextType", _context.default);