"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _Modal = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal"));

var _AccountNoAccount = _interopRequireDefault(require("../AccountNoAccount"));

var _AccountSocialLogin = _interopRequireDefault(require("../AccountSocialLogin"));

var _AccountCheckEmail = _interopRequireDefault(require("../AccountCheckEmail"));

var _KiwiLogin = _interopRequireDefault(require("./components/KiwiLogin"));

var _Intro = _interopRequireDefault(require("./components/Intro"));

var _CreateAccount = _interopRequireDefault(require("./components/CreateAccount"));

var _SendMagicLink = _interopRequireDefault(require("./mutations/SendMagicLink"));

var _errors = _interopRequireDefault(require("../../consts/errors"));

var _context = require("../../services/brand/context");

var _context2 = require("../../services/log/context");

var _events = require("../../consts/events");

var loginEvents = _interopRequireWildcard(require("./consts/events"));

var MagicLoginWithoutContext =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MagicLoginWithoutContext, _React$Component);

  function MagicLoginWithoutContext(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MagicLoginWithoutContext);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MagicLoginWithoutContext).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClose", function () {
      var successfulClose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var onClose = _this.props.onClose;

      _this.setState({
        successfulClose: successfulClose
      }, function () {
        onClose();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleEmailChange", function (e) {
      _this.setState({
        email: e.target.value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleToIntro", function () {
      _this.handleChangeScreen("intro");
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleToSignUp", function () {
      var log = _this.props.log;
      log(loginEvents.CONTINUE_WITH_REGISTER, {});

      _this.handleChangeScreen("signUp");
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleGoogleLogin", function () {
      var _this$props = _this.props,
          onSocialLogin = _this$props.onSocialLogin,
          log = _this$props.log;
      var screen = _this.state.screen;
      log(loginEvents.LOGIN_VIA_SOCIAL, {
        provider: "google",
        screen: screen
      });

      _this.setState({
        successfulClose: true
      }, function () {
        onSocialLogin("google");
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleFacebookLogin", function () {
      var _this$props2 = _this.props,
          onSocialLogin = _this$props2.onSocialLogin,
          log = _this$props2.log;
      var screen = _this.state.screen;
      log(loginEvents.LOGIN_VIA_SOCIAL, {
        provider: "facebook",
        screen: screen
      });

      _this.setState({
        successfulClose: true
      }, function () {
        onSocialLogin("facebook");
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMagicLink", function () {
      var email = _this.state.email;
      var _this$props3 = _this.props,
          brand = _this$props3.brand,
          log = _this$props3.log;

      _this.setState({
        isSendingEmail: true,
        error: ""
      });

      (0, _SendMagicLink.default)(email, brand.id).then(function (res) {
        var _res$sendMagicLink;

        _this.setState({
          isSendingEmail: false
        });

        if (!((_res$sendMagicLink = res.sendMagicLink) === null || _res$sendMagicLink === void 0 ? void 0 : _res$sendMagicLink.success)) {
          log(_events.API_REQUEST_FAILED, {
            operation: "sendMagicLink"
          });

          _this.setState({
            error: _errors.default.general
          });

          return;
        }

        log(loginEvents.MAGIC_LINK_SENT, {});

        _this.handleChangeScreen("magicLink");
      }).catch(function (err) {
        log(_events.API_ERROR, {
          error: String(err),
          operation: "sendMagicLink"
        });

        _this.setState({
          isSendingEmail: false,
          error: _errors.default.general
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSignUpConfirmation", function () {
      _this.handleChangeScreen("signUpConfirmation");
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChangeScreen", function (screen) {
      var log = _this.props.log;
      log(loginEvents.SCREEN_CHANGED, {
        screen: screen
      });

      _this.setState({
        screen: screen
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleResetMagicLinkError", function () {
      _this.setState({
        error: ""
      });
    });
    _this.state = {
      email: "",
      screen: props.initialScreen,
      isSendingEmail: false,
      error: "",
      successfulClose: false
    };
    return _this;
  }

  (0, _createClass2.default)(MagicLoginWithoutContext, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var log = this.props.log;
      var screen = this.state.screen;
      log(loginEvents.MAGIC_LOGIN_MODAL_SHOWN, {
        screen: screen
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var log = this.props.log;
      var _this$state = this.state,
          successfulClose = _this$state.successfulClose,
          screen = _this$state.screen;
      var successfulScreens = ["signUpConfirmation", "magicLink", "resetPassword"];

      if (successfulClose || screen === "magicLink") {
        log(loginEvents.LOGIN_PATH_FULFILLED, {
          withMagicLink: screen === "magicLink"
        });
      }

      if (!(successfulClose || successfulScreens.includes(screen))) {
        log(loginEvents.LOGIN_ABANDONED, {
          screen: screen
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          type = _this$props4.type,
          onSignIn = _this$props4.onSignIn,
          brand = _this$props4.brand,
          disableSocialLogin = _this$props4.disableSocialLogin;
      var _this$state2 = this.state,
          screen = _this$state2.screen,
          email = _this$state2.email,
          isSendingEmail = _this$state2.isSendingEmail,
          error = _this$state2.error;
      return (// $FlowExpected: Broken modal section handling, fix here or in Orbit
        React.createElement(_Modal.default, {
          size: "small",
          onClose: this.handleClose,
          dataTest: "MagicLogin"
        }, screen === "intro" && React.createElement(_Intro.default, {
          email: email,
          brandId: brand.id,
          magicLinkError: error,
          type: type,
          disableSocialLogin: disableSocialLogin,
          onEmailChange: this.handleEmailChange,
          onGoogleLogin: this.handleGoogleLogin,
          onFacebookLogin: this.handleFacebookLogin,
          onSendMagicLink: this.handleMagicLink,
          onChangeScreen: this.handleChangeScreen
        }), screen === "noAccount" && React.createElement(_AccountNoAccount.default, {
          onBack: this.handleToIntro,
          onRegister: this.handleToSignUp,
          onGoogleLogin: this.handleGoogleLogin,
          onFacebookLogin: this.handleFacebookLogin
        }), screen === "signUp" && React.createElement(_CreateAccount.default, {
          email: email,
          brandId: brand.id,
          onEmailChange: this.handleEmailChange,
          onSignUpConfirmation: this.handleSignUpConfirmation
        }), screen === "kiwiLogin" && React.createElement(_KiwiLogin.default, {
          email: email,
          onResetMagicLinkError: this.handleResetMagicLinkError,
          magicLinkError: error,
          brandId: brand.id,
          brandName: brand.name,
          isSendingEmail: isSendingEmail,
          onChangeScreen: this.handleChangeScreen,
          onAskSignInLink: this.handleMagicLink,
          onClose: this.handleClose,
          onSignIn: onSignIn
        }), screen === "googleLogin" && React.createElement(_AccountSocialLogin.default, {
          email: email,
          pairedWith: "google",
          onAskSignInLink: this.handleMagicLink,
          onSocialLogin: this.handleGoogleLogin
        }), screen === "facebookLogin" && React.createElement(_AccountSocialLogin.default, {
          email: email,
          pairedWith: "facebook",
          onAskSignInLink: this.handleMagicLink,
          onSocialLogin: this.handleFacebookLogin
        }), (screen === "signUpConfirmation" || screen === "magicLink" || screen === "resetPassword") && React.createElement(_AccountCheckEmail.default, {
          reason: screen,
          email: email
        }))
      );
    }
  }]);
  return MagicLoginWithoutContext;
}(React.Component);

(0, _defineProperty2.default)(MagicLoginWithoutContext, "defaultProps", {
  type: "mmb",
  disableSocialLogin: false
});

var MagicLogin = function MagicLogin(props) {
  return React.createElement(_context.Consumer, null, function (brand) {
    return React.createElement(_context2.Consumer, null, function (_ref) {
      var log = _ref.log;
      return React.createElement(MagicLoginWithoutContext, (0, _extends2.default)({}, props, {
        brand: brand,
        log: log
      }));
    });
  });
};

var _default = MagicLogin;
exports.default = _default;