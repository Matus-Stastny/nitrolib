"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _errors = _interopRequireDefault(require("../../../../consts/errors"));

var _context = require("../../../../services/intl/context");

var validators = _interopRequireWildcard(require("../../../../services/input/validators"));

var _AccountCreate = _interopRequireDefault(require("../../../AccountCreate"));

var _Text = _interopRequireDefault(require("../../../Text"));

var _CreateAccount = _interopRequireDefault(require("../../mutations/CreateAccount"));

var _context2 = _interopRequireDefault(require("../../../../services/log/context"));

var loginEvents = _interopRequireWildcard(require("../../consts/events"));

var _events2 = require("../../../../consts/events");

// TODO no errors in state, just in render
var defaultErrors = {
  passwordError: null,
  passwordConfirmError: null
};
var submitErrors = {
  ACCOUNT_EXISTS: _errors.default.accountExists,
  WEAK_PASSWORD: _errors.default.weakPassword,
  INVALID_EMAIL: _errors.default.invalidEmail,
  "%future added value": _errors.default.general
};

var CreateAccountScreen =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(CreateAccountScreen, _React$PureComponent);

  function CreateAccountScreen() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CreateAccountScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CreateAccountScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", (0, _objectSpread2.default)({}, defaultErrors, {
      error: null,
      password: "",
      passwordConfirm: "",
      isCreatingAccount: false,
      validatePassword: false,
      // eslint-disable-line react/no-unused-state
      validateEmail: false
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleEmailBlur", function () {
      _this.setState({
        validateEmail: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handlePasswordChange", function (e) {
      _this.setState({
        password: e.target.value
      }, _this.checkPasswordValidity);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handlePasswordBlur", function () {
      // eslint-disable-next-line react/no-unused-state
      _this.setState({
        validatePassword: true
      }, _this.checkPasswordValidity);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handlePasswordConfirmChange", function (e) {
      _this.setState({
        passwordConfirm: e.target.value
      });

      _this.setState(function (_ref) {
        var password = _ref.password,
            passwordConfirm = _ref.passwordConfirm,
            passwordConfirmError = _ref.passwordConfirmError;

        if (passwordConfirmError === null) {
          return null;
        }

        if (password !== passwordConfirm) {
          return {
            passwordConfirmError: _errors.default.passwordMismatch
          };
        }

        return {
          passwordConfirmError: ""
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handlePasswordConfirmBlur", function () {
      _this.setState(function (_ref2) {
        var password = _ref2.password,
            passwordConfirm = _ref2.passwordConfirm;

        if (password !== passwordConfirm) {
          return {
            passwordConfirmError: _errors.default.passwordMismatch
          };
        }

        return {
          passwordConfirmError: ""
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleContinue", function (e) {
      var _this$props = _this.props,
          email = _this$props.email,
          brandId = _this$props.brandId,
          onSignUpConfirmation = _this$props.onSignUpConfirmation;
      var password = _this.state.password;
      var log = _this.context.log;
      e.preventDefault();

      if (_this.validateInput()) {
        return;
      }

      _this.setState((0, _objectSpread2.default)({
        isCreatingAccount: true,
        error: null
      }, defaultErrors));

      (0, _CreateAccount.default)(brandId, {
        email: email,
        password: password
      }).then(function (res) {
        var _res$createAccount;

        _this.setState({
          isCreatingAccount: false
        });

        if (!((_res$createAccount = res.createAccount) === null || _res$createAccount === void 0 ? void 0 : _res$createAccount.success)) {
          var _res$createAccount2, _res$createAccount3;

          log(_events2.API_REQUEST_FAILED, {
            operation: "createAccount",
            error: ((_res$createAccount2 = res.createAccount) === null || _res$createAccount2 === void 0 ? void 0 : _res$createAccount2.error) || ""
          });

          _this.setSubmitError((_res$createAccount3 = res.createAccount) === null || _res$createAccount3 === void 0 ? void 0 : _res$createAccount3.error);

          return;
        }

        log(loginEvents.REGISTRATION_SENT, {});
        onSignUpConfirmation();
      }).catch(function (err) {
        _this.setState({
          isCreatingAccount: false
        });

        log(_events2.API_ERROR, {
          error: String(err),
          operation: "createAccount"
        });

        _this.setSubmitError(null);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getPasswordConfirmError", function () {
      var _this$state = _this.state,
          password = _this$state.password,
          passwordConfirm = _this$state.passwordConfirm;

      if (!passwordConfirm) {
        return _errors.default.requiredField;
      }

      return password === passwordConfirm ? "" : _errors.default.passwordMismatch;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "validateInput", function () {
      var email = _this.props.email;
      var password = _this.state.password;
      var emailError = email ? validators.email(email) : _errors.default.requiredField;
      var passwordError = password ? validators.password(password) : _errors.default.requiredField;

      var passwordConfirmError = _this.getPasswordConfirmError();

      _this.setState({
        validateEmail: true,
        validatePassword: true,
        // eslint-disable-line react/no-unused-state
        passwordError: passwordError,
        passwordConfirmError: passwordConfirmError,
        error: emailError || passwordError || passwordConfirmError
      });

      return emailError || passwordError || passwordConfirmError;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "checkPasswordValidity", function () {
      _this.setState(function (_ref3) {
        var validatePassword = _ref3.validatePassword,
            password = _ref3.password;
        return {
          passwordError: validatePassword ? validators.password(password) : null
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "setSubmitError", function (responseError) {
      var error = responseError ? submitErrors[responseError] : _errors.default.general;

      _this.setState({
        error: error
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "context", void 0);
    return _this;
  }

  (0, _createClass2.default)(CreateAccountScreen, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(_context.Consumer, null, function (intl) {
        var _this2$props = _this2.props,
            email = _this2$props.email,
            onEmailChange = _this2$props.onEmailChange;
        var _this2$state = _this2.state,
            password = _this2$state.password,
            passwordConfirm = _this2$state.passwordConfirm,
            isCreatingAccount = _this2$state.isCreatingAccount,
            error = _this2$state.error,
            validateEmail = _this2$state.validateEmail,
            passwordError = _this2$state.passwordError,
            passwordConfirmError = _this2$state.passwordConfirmError;
        var emailError = validateEmail ? intl.translate(validators.email(email)) : "";
        var passError = passwordError ? intl.translate(passwordError) : "";
        var passConfirmError = passwordConfirmError ? intl.translate(passwordConfirmError) : "";
        return React.createElement(_AccountCreate.default, {
          email: email,
          password: password,
          error: error ? React.createElement(_Text.default, {
            t: error,
            values: {
              text: email
            }
          }) : null,
          passwordConfirm: passwordConfirm,
          emailError: emailError,
          passwordError: passError,
          passwordConfirmError: passConfirmError,
          isLoading: isCreatingAccount,
          onEmailChange: onEmailChange,
          onEmailBlur: _this2.handleEmailBlur,
          onPasswordChange: _this2.handlePasswordChange,
          onPasswordBlur: _this2.handlePasswordBlur,
          onPasswordConfirmChange: _this2.handlePasswordConfirmChange,
          onPasswordConfirmBlur: _this2.handlePasswordConfirmBlur,
          onContinue: _this2.handleContinue
        });
      });
    }
  }]);
  return CreateAccountScreen;
}(React.PureComponent);

exports.default = CreateAccountScreen;
(0, _defineProperty2.default)(CreateAccountScreen, "contextType", _context2.default);