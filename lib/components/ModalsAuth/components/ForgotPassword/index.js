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

var _Email = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Email"));

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Alert"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _index = require("../../../../styles/index");

var _Theme = require("../../../../records/Theme");

var _index2 = _interopRequireDefault(require("../../../LogMount/index"));

var _index3 = _interopRequireDefault(require("../../../InputText/index"));

var _index4 = _interopRequireDefault(require("../../../IconText/index"));

var _index5 = _interopRequireDefault(require("../../../Translate/index"));

var _index6 = _interopRequireDefault(require("../../../AcceptAlert/index"));

var validators = _interopRequireWildcard(require("../../../../services/input/validators"));

var _composeValidator = _interopRequireDefault(require("../../../../services/input/composeValidator"));

var normalizers = _interopRequireWildcard(require("../../../../services/input/normalizers"));

var _emailCorrector = _interopRequireDefault(require("../../../../services/input/emailCorrector"));

var api = _interopRequireWildcard(require("../../../../services/auth/api"));

var _events = require("../../../../consts/events");

var emailValidator = (0, _composeValidator.default)(validators.email, validators.required);

var Container = _styledComponents.default.div.withConfig({
  displayName: "ForgotPassword__Container",
  componentId: "sc-13othj9-0"
})(["padding:", "px;background:", ";"], _index.padding.page, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteWhite;
});

Container.defaultProps = {
  theme: _Theme.themeDefault
};

var FieldWrap = _styledComponents.default.div.withConfig({
  displayName: "ForgotPassword__FieldWrap",
  componentId: "sc-13othj9-1"
})(["position:relative;margin:15px 0;"]);

var _ref3 =
/*#__PURE__*/
React.createElement(_Text.default, null, React.createElement(_index5.default, {
  t: "account.user_with_email_does_not_exist"
}));

var _ref4 =
/*#__PURE__*/
React.createElement(_Text.default, null, React.createElement(_index5.default, {
  t: "account.you_will_recieve_password"
}));

var _ref5 =
/*#__PURE__*/
React.createElement(FieldWrap, null, React.createElement(_Alert.default, {
  type: "critical"
}, React.createElement(_index5.default, {
  t: "common.api_error"
})));

var _ref6 =
/*#__PURE__*/
React.createElement(_Text.default, null, React.createElement(_index5.default, {
  t: "account.enter_your_email"
}));

var _ref7 =
/*#__PURE__*/
React.createElement(_index4.default, {
  icon: React.createElement(_Email.default, {
    color: "primary",
    size: "small"
  })
}, React.createElement(_index5.default, {
  t: "common.email.colon"
}));

var _ref8 =
/*#__PURE__*/
React.createElement(_index5.default, {
  t: "common.loading"
});

var _ref9 =
/*#__PURE__*/
React.createElement(_index5.default, {
  t: "account.reset_password"
});

var ForgotPassword =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(ForgotPassword, _React$PureComponent);

  function ForgotPassword() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ForgotPassword);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ForgotPassword)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      email: {
        value: "",
        error: "forms.this_field_must_be_filled"
      },
      submitted: false,
      loading: false,
      error: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (_ref2) {
      var value = _ref2.value,
          error = _ref2.error;

      _this.setState({
        email: {
          value: value,
          error: error
        },
        submitted: false,
        error: null
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSubmit", function (ev) {
      ev.preventDefault();
      var _this$props = _this.props,
          brandId = _this$props.brandId,
          resetPassword = _this$props.resetPassword;
      var _this$state = _this.state,
          loading = _this$state.loading,
          email = _this$state.email;

      if (loading || email.error) {
        return Promise.resolve();
      }

      _this.setState({
        error: null,
        loading: true
      });

      return resetPassword(email.value, brandId).then(function () {
        _this.setState({
          loading: false,
          submitted: true
        }); // TODO log

      }).catch(function (err) {
        _this.setState({
          loading: false,
          error: err
        }); // TODO log

      });
    });
    return _this;
  }

  (0, _createClass2.default)(ForgotPassword, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          email = _this$state2.email,
          submitted = _this$state2.submitted,
          loading = _this$state2.loading,
          error = _this$state2.error;
      var onClose = this.props.onClose;

      if (error && error.name === "INVALID_ARGUMENT_LOGIN") {
        return React.createElement(_index6.default, {
          onClose: onClose
        }, _ref3);
      }

      if (submitted) {
        return React.createElement(_index6.default, {
          onClose: onClose
        }, _ref4);
      }

      return React.createElement(Container, null, React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement(_index2.default, {
        event: _events.MODAL_OPEN,
        props: {
          modal: "forgotPassword"
        }
      }), error && _ref5, _ref6, React.createElement(FieldWrap, null, _ref7, React.createElement(_index3.default, {
        id: "email",
        value: email.value,
        error: email.error,
        onChange: this.handleChange,
        normalize: normalizers.email,
        validate: emailValidator,
        corrector: _emailCorrector.default,
        autoComplete: "email",
        showState: submitted
      })), React.createElement(_Button.default, {
        block: true,
        submit: true,
        size: "large",
        disabled: loading || Boolean(email.error)
      }, loading ? _ref8 : _ref9)));
    }
  }]);
  return ForgotPassword;
}(React.PureComponent);

exports.default = ForgotPassword;
(0, _defineProperty2.default)(ForgotPassword, "defaultProps", {
  resetPassword: api.resetPassword
});