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

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Alert"));

var _Email = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Email"));

var _Security = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Security"));

var _Passenger = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Passenger"));

var _index = _interopRequireDefault(require("../../../Query/index"));

var _index2 = _interopRequireDefault(require("../../../LogMount/index"));

var _index3 = _interopRequireDefault(require("../../../InputText/index"));

var _index4 = _interopRequireDefault(require("../../../IconText/index"));

var _index5 = _interopRequireDefault(require("../../../Translate/index"));

var _firstFormError = _interopRequireDefault(require("../../../NavBar/services/firstFormError"));

var normalizers = _interopRequireWildcard(require("../../../../services/input/normalizers"));

var validators = _interopRequireWildcard(require("../../../../services/input/validators"));

var _composeValidator = _interopRequireDefault(require("../../../../services/input/composeValidator"));

var _emailCorrector = _interopRequireDefault(require("../../../../services/input/emailCorrector"));

var _addScript = _interopRequireDefault(require("../../../../services/utils/addScript"));

var _isEmptish = _interopRequireDefault(require("../../../../services/utils/isEmptish"));

var _link = _interopRequireDefault(require("../../../../styles/mixins/link"));

var _Theme = require("../../../../records/Theme");

var _events = require("../../../../consts/events");

var ZXCVBN_URL = "https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js";
var ERRORS = {
  "Password is too short.": "account.password_too_short",
  "Password has a pattern.": "account.password_has_pattern",
  "Password is too common.": "account.password_too_common",
  "Password is too simple.": "account.password_too_simple"
};
var emailValidator = (0, _composeValidator.default)(validators.email, validators.required);
var passwordValidator = (0, _composeValidator.default)(validators.password, validators.required);

var FieldWrap = _styledComponents.default.div.withConfig({
  displayName: "Register__FieldWrap",
  componentId: "vpxwx-0"
})(["position:relative;margin:15px 0;"]);

var FieldPolicy = (0, _styledComponents.default)(FieldWrap).withConfig({
  displayName: "Register__FieldPolicy",
  componentId: "vpxwx-1"
})(["", ";"], _link.default);
FieldPolicy.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref2 =
/*#__PURE__*/
React.createElement(_index4.default, {
  icon: React.createElement(_Passenger.default, {
    color: "primary",
    size: "small"
  })
}, React.createElement(_index5.default, {
  t: "common.firstname.colon"
}));

var _ref3 =
/*#__PURE__*/
React.createElement(_index4.default, {
  icon: React.createElement(_Passenger.default, {
    color: "primary",
    size: "small"
  })
}, React.createElement(_index5.default, {
  t: "common.lastname.colon"
}));

var _ref4 =
/*#__PURE__*/
React.createElement(_index4.default, {
  icon: React.createElement(_Email.default, {
    color: "primary",
    size: "small"
  })
}, React.createElement(_index5.default, {
  t: "common.email.colon"
}));

var _ref5 =
/*#__PURE__*/
React.createElement(_index4.default, {
  icon: React.createElement(_Security.default, {
    color: "primary",
    size: "small"
  })
}, React.createElement(_index5.default, {
  t: "account.password.colon"
}));

var _ref6 =
/*#__PURE__*/
React.createElement(FieldPolicy, null, React.createElement(_Text.default, null, React.createElement(_index5.default, {
  t: "account.registration_privacy_policy",
  html: true
})));

var _ref7 =
/*#__PURE__*/
React.createElement(_index5.default, {
  t: "account.sign_up"
});

var Register =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Register, _React$PureComponent);

  function Register() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      fields: {
        firstName: {
          value: "",
          error: "forms.this_field_must_be_filled"
        },
        lastName: {
          value: "",
          error: "forms.this_field_must_be_filled"
        },
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
      // ?first_name=Joe&last_name=Doe&email=joe@doe.com
      if (query.first_name) {
        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "firstName", "value"], query.first_name, state);
        });

        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "firstName", "error"], "", state);
        });
      }

      if (query.last_name) {
        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "lastName", "value"], query.last_name, state);
        });

        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "lastName", "error"], "", state);
        });
      }

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
          onRegister = _this$props.onRegister,
          onChange = _this$props.onChange;
      var fields = _this.state.fields;

      if (loading) {
        return Promise.resolve(null);
      }

      _this.setState({
        submitted: true
      });

      if (!(0, _isEmptish.default)((0, _map2.default)((0, _prop2.default)("error"), fields))) {
        return Promise.resolve(null);
      }

      return onRegister({
        firstName: fields.firstName.value,
        lastName: fields.lastName.value,
        email: fields.email.value,
        password: fields.password.value
      }).then(function () {
        onChange();
      }).catch(function (err) {
        var msg = err.message;

        _this.setState({
          error: ERRORS[msg] || msg
        });
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.zxcvbn) {
        (0, _addScript.default)(ZXCVBN_URL);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          fields = _this$state.fields,
          submitted = _this$state.submitted,
          error = _this$state.error;
      var loading = this.props.loading;
      var errorSync = (0, _firstFormError.default)(fields);
      return React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement(_index.default, {
        onMount: this.handleMount
      }), React.createElement(_index2.default, {
        event: _events.MODAL_OPEN,
        props: {
          modal: "register"
        }
      }), React.createElement(FieldWrap, null, _ref2, React.createElement(_index3.default, {
        id: "firstName",
        value: fields.firstName.value,
        error: fields.firstName.error,
        onChange: this.handleChange,
        validate: validators.required,
        autoComplete: "given-name",
        showState: submitted
      })), React.createElement(FieldWrap, null, _ref3, React.createElement(_index3.default, {
        id: "lastName",
        value: fields.lastName.value,
        error: fields.lastName.error,
        onChange: this.handleChange,
        validate: validators.required,
        autoComplete: "family-name",
        showState: submitted
      })), React.createElement(FieldWrap, null, _ref4, React.createElement(_index3.default, {
        id: "email",
        value: fields.email.value,
        error: fields.email.error,
        onChange: this.handleChange,
        normalize: normalizers.email,
        validate: emailValidator,
        corrector: _emailCorrector.default,
        autoComplete: "email",
        showState: submitted
      })), React.createElement(FieldWrap, null, _ref5, React.createElement(_index3.default, {
        id: "password",
        value: fields.password.value,
        error: fields.password.error,
        onChange: this.handleChange,
        validate: passwordValidator,
        type: "password",
        showState: submitted
      })), _ref6, error && React.createElement(FieldWrap, null, React.createElement(_Alert.default, {
        type: "critical"
      }, React.createElement(_index5.default, {
        t: error
      }))), submitted && errorSync && React.createElement(FieldWrap, null, React.createElement(_Alert.default, {
        type: "critical"
      }, React.createElement(_index5.default, {
        t: errorSync
      }))), React.createElement(_Button.default, {
        block: true,
        submit: true,
        disabled: loading
      }, _ref7));
    }
  }]);
  return Register;
}(React.PureComponent);

exports.default = Register;