"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prop2 = _interopRequireDefault(require("ramda/src/prop"));

var _map2 = _interopRequireDefault(require("ramda/src/map"));

var _assoc2 = _interopRequireDefault(require("ramda/src/assoc"));

var _assocPath2 = _interopRequireDefault(require("ramda/src/assocPath"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _longArrowRight = _interopRequireDefault(require("react-icons/lib/fa/long-arrow-right"));

var _Email = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Email"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Alert"));

var _TextLink = _interopRequireDefault(require("@kiwicom/orbit-components/lib/TextLink"));

var _Security = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Security"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _Theme = require("../../../../records/Theme");

var _ValueBind = _interopRequireDefault(require("../../../ValueBind"));

var _InputText = _interopRequireDefault(require("../../../InputText"));

var _LogMount = _interopRequireDefault(require("../../../LogMount"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _firstFormError = _interopRequireDefault(require("../../../NavBar/services/firstFormError"));

var _composeValidator = _interopRequireDefault(require("../../../../services/input/composeValidator"));

var validators = _interopRequireWildcard(require("../../../../services/input/validators"));

var normalizers = _interopRequireWildcard(require("../../../../services/input/normalizers"));

var _emailCorrector = _interopRequireDefault(require("../../../../services/input/emailCorrector"));

var _isEmptish = _interopRequireDefault(require("../../../../services/utils/isEmptish"));

var _IconText = _interopRequireDefault(require("../../../IconText"));

var _Query = _interopRequireDefault(require("../../../Query"));

var _events = require("../../../../consts/events");

var ERRORS = {
  "Login failed.": "account.login_failed",
  "User is not verified.": "account.user_is_not_verified",
  "You are temporarily blocked from other login attempts.": "account.user_temporarily_blocked_from_login"
};
var emailValidator = (0, _composeValidator.default)(validators.email, validators.required);

var FieldWrap = _styledComponents.default.div.withConfig({
  displayName: "SignIn__FieldWrap",
  componentId: "sc-1vybuzi-0"
})(["position:relative;margin:15px 0;"]);

var FieldCentered = (0, _styledComponents.default)(FieldWrap).withConfig({
  displayName: "SignIn__FieldCentered",
  componentId: "sc-1vybuzi-1"
})(["text-align:center;"]);

var ForgotPasswordArrow = _styledComponents.default.span.withConfig({
  displayName: "SignIn__ForgotPasswordArrow",
  componentId: "sc-1vybuzi-2"
})(["margin-", ":5px;margin-top:-2px;"],
/* sc-custom "left" */
_rtl.left);

ForgotPasswordArrow.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref2 =
/*#__PURE__*/
React.createElement(_IconText.default, {
  icon: React.createElement(_Email.default, {
    color: "primary",
    size: "small"
  })
}, React.createElement(_Translate.default, {
  t: "common.email.colon"
}));

var _ref3 =
/*#__PURE__*/
React.createElement(_IconText.default, {
  icon: React.createElement(_Security.default, {
    color: "primary",
    size: "small"
  })
}, React.createElement(_Translate.default, {
  t: "account.password.colon"
}));

var _ref4 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.sign_in"
});

var _ref6 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.forgot_password"
});

var _ref7 =
/*#__PURE__*/
React.createElement(ForgotPasswordArrow, null, React.createElement(_longArrowRight.default, null));

var SignIn =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(SignIn, _React$PureComponent);

  function SignIn() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, SignIn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SignIn)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      fields: {
        email: {
          value: "",
          error: "forms.this_field_must_be_filled"
        },
        password: {
          value: "",
          error: "forms.this_field_must_be_filled"
        }
      },
      submitted: false,
      error: ""
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMount", function (query) {
      // ?email=joe@doe.com
      if (query.email) {
        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "email", "value"], query.email, state);
        });

        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "email", "error"], "", state);
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (_ref) {
      var value = _ref.value,
          error = _ref.error,
          id = _ref.id;

      _this.setState(function (state) {
        return {
          fields: (0, _assoc2.default)(id, {
            value: value,
            error: error
          }, state.fields)
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSubmit", function (ev) {
      ev.preventDefault();
      var _this$props = _this.props,
          loading = _this$props.loading,
          onSignIn = _this$props.onSignIn,
          onChange = _this$props.onChange;
      var fields = _this.state.fields;

      if (loading) {
        return;
      }

      _this.setState({
        submitted: true,
        error: ""
      });

      if (!(0, _isEmptish.default)((0, _map2.default)((0, _prop2.default)("error"), fields))) {
        return;
      }

      onSignIn(fields.email.value, fields.password.value).then(function () {
        onChange();
      }).catch(function (err) {
        var msg = err.message;

        _this.setState({
          error: ERRORS[msg] || "common.api_error"
        });
      });
    });
    return _this;
  }

  (0, _createClass2.default)(SignIn, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          fields = _this$state.fields,
          submitted = _this$state.submitted,
          error = _this$state.error;
      var _this$props2 = this.props,
          loading = _this$props2.loading,
          onChange = _this$props2.onChange;
      var errorSync = (0, _firstFormError.default)(fields);
      return React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement(_Query.default, {
        onMount: this.handleMount
      }), React.createElement(_LogMount.default, {
        event: _events.MODAL_OPEN,
        props: {
          modal: "signIn"
        }
      }), React.createElement(FieldWrap, null, _ref2, React.createElement(_InputText.default, {
        id: "email",
        value: fields.email.value,
        error: fields.email.error,
        onChange: this.handleChange,
        normalize: normalizers.email,
        validate: emailValidator,
        corrector: _emailCorrector.default,
        autoComplete: "email",
        showState: submitted
      })), React.createElement(FieldWrap, null, _ref3, React.createElement(_InputText.default, {
        id: "password",
        value: fields.password.value,
        error: fields.password.error,
        onChange: this.handleChange,
        validate: validators.required,
        type: "password",
        showState: submitted
      })), error && React.createElement(FieldWrap, null, React.createElement(_Alert.default, {
        type: "critical"
      }, React.createElement(_Translate.default, {
        t: error
      }))), submitted && errorSync && React.createElement(FieldWrap, null, React.createElement(_Alert.default, {
        type: "critical"
      }, React.createElement(_Translate.default, {
        t: errorSync
      }))), React.createElement(_Button.default, {
        block: true,
        submit: true,
        disabled: loading
      }, _ref4), React.createElement(FieldWrap, null, React.createElement(FieldCentered, null, React.createElement(_ValueBind.default, {
        value: "forgotPassword",
        onChange: onChange
      }, function (_ref5) {
        var onClick = _ref5.onClick;
        return React.createElement(_TextLink.default, {
          onClick: onClick
        }, _ref6, _ref7);
      }))));
    }
  }]);
  return SignIn;
}(React.PureComponent);

exports.default = SignIn;