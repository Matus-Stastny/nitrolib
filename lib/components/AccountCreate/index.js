"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Alert"));

var _Heading = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Heading"));

var _InputField = _interopRequireDefault(require("@kiwicom/orbit-components/lib/InputField"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _Illustration = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Illustration"));

var _ModalHeader = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalHeader"));

var _ModalSection = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalSection"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _context = require("../../services/intl/context");

var _Translate = _interopRequireDefault(require("../Translate"));

var _Text = _interopRequireDefault(require("../Text"));

var _ref2 =
/*#__PURE__*/
React.createElement(_ModalHeader.default, null, React.createElement(_Illustration.default, {
  name: "EnjoyApp",
  size: "small"
}), React.createElement(_Heading.default, {
  element: "h2"
}, React.createElement(_Translate.default, {
  t: "account.create_account"
})), React.createElement(_Text.default, {
  t: "account.create_account_description"
}));

var _ref5 =
/*#__PURE__*/
React.createElement(_Text.default, {
  size: "small",
  t: "account.registration_privacy_policy",
  html: true
});

var _ref6 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.create"
});

var AccountCreate = function AccountCreate(_ref) {
  var email = _ref.email,
      onEmailBlur = _ref.onEmailBlur,
      onEmailChange = _ref.onEmailChange,
      onContinue = _ref.onContinue,
      password = _ref.password,
      error = _ref.error,
      emailHint = _ref.emailHint,
      emailError = _ref.emailError,
      passwordError = _ref.passwordError,
      passwordConfirmError = _ref.passwordConfirmError,
      isLoading = _ref.isLoading,
      passwordConfirm = _ref.passwordConfirm,
      onPasswordChange = _ref.onPasswordChange,
      onPasswordBlur = _ref.onPasswordBlur,
      onPasswordConfirmChange = _ref.onPasswordConfirmChange,
      onPasswordConfirmBlur = _ref.onPasswordConfirmBlur;

  var _ref3 =
  /*#__PURE__*/
  React.createElement(_Alert.default, {
    type: "critical",
    icon: true
  }, error);

  var _ref4 =
  /*#__PURE__*/
  React.createElement(_Button.default, {
    submit: true,
    loading: isLoading
  }, _ref6);

  return React.createElement(_context.Consumer, null, function (intl) {
    return React.createElement(React.Fragment, null, _ref2, React.createElement(_ModalSection.default, {
      dataTest: "AccountCreate"
    }, React.createElement("form", {
      onSubmit: onContinue
    }, React.createElement(_Stack.default, {
      spacing: "comfy"
    }, error && _ref3, React.createElement(_InputField.default, {
      label: intl.translate("account.email"),
      placeholder: intl.translate("account.email_placeholder"),
      error: emailError,
      help: emailHint,
      value: email,
      onChange: onEmailChange,
      onBlur: onEmailBlur,
      name: "email",
      dataTest: "Email"
    }), React.createElement(_InputField.default, {
      label: intl.translate("account.password"),
      error: passwordError,
      type: "password",
      name: "passwordNew",
      value: password,
      onChange: onPasswordChange,
      onBlur: onPasswordBlur,
      dataTest: "Password"
    }), React.createElement(_InputField.default, {
      label: intl.translate("account.password_confirmaiton"),
      error: passwordConfirmError,
      type: "password",
      name: "passwordRepeat",
      value: passwordConfirm,
      onChange: onPasswordConfirmChange,
      onBlur: onPasswordConfirmBlur,
      dataTest: "PasswordConfirm"
    }), _ref4, _ref5))));
  });
};

var _default = AccountCreate;
exports.default = _default;