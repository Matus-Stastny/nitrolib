"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Alert"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _TextLink = _interopRequireDefault(require("@kiwicom/orbit-components/lib/TextLink"));

var _Heading = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Heading"));

var _InputField = _interopRequireDefault(require("@kiwicom/orbit-components/lib/InputField"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _Illustration = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Illustration"));

var _Edit = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Edit"));

var _ModalHeader = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalHeader"));

var _ModalSection = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalSection"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _context = require("../../services/intl/context");

var _context2 = require("../../services/brand/context");

var _Translate = _interopRequireDefault(require("../Translate"));

var _Text2 = _interopRequireDefault(require("../Text"));

var _ref2 =
/*#__PURE__*/
React.createElement(_Illustration.default, {
  name: "Login",
  size: "small"
});

var _ref3 =
/*#__PURE__*/
React.createElement(_Heading.default, {
  element: "h2"
}, React.createElement(_Translate.default, {
  t: "account.manage_your_bookings"
}));

var _ref9 =
/*#__PURE__*/
React.createElement(_Edit.default, {
  size: "small"
});

var _ref10 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.sign_in"
});

var _ref11 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.forgot_password"
});

var _ref12 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.ask_sign_in_link"
});

var AccountPassword = function AccountPassword(_ref) {
  var email = _ref.email,
      password = _ref.password,
      error = _ref.error,
      passwordError = _ref.passwordError,
      isSigningIn = _ref.isSigningIn,
      isSendingEmail = _ref.isSendingEmail,
      onChangeEmail = _ref.onChangeEmail,
      onAskSignInLink = _ref.onAskSignInLink,
      onPasswordChange = _ref.onPasswordChange,
      onForgotPassword = _ref.onForgotPassword,
      onSignIn = _ref.onSignIn;

  var _ref4 =
  /*#__PURE__*/
  React.createElement(_Alert.default, {
    type: "critical",
    icon: true
  }, error);

  var _ref5 =
  /*#__PURE__*/
  React.createElement(_Stack.default, {
    spacing: "tight",
    flex: true,
    align: "center"
  }, React.createElement(_Text.default, {
    weight: "bold"
  }, email), React.createElement(_TextLink.default, {
    type: "primary",
    onClick: onChangeEmail
  }, _ref9));

  var _ref6 =
  /*#__PURE__*/
  React.createElement(_Button.default, {
    submit: true,
    loading: isSigningIn
  }, _ref10);

  var _ref7 =
  /*#__PURE__*/
  React.createElement(_TextLink.default, {
    type: "secondary",
    size: "small",
    onClick: onForgotPassword
  }, _ref11);

  var _ref8 =
  /*#__PURE__*/
  React.createElement(_Button.default, {
    type: "secondary",
    onClick: onAskSignInLink,
    loading: isSendingEmail,
    dataTest: "AskForMagic"
  }, _ref12);

  return React.createElement(_context.Consumer, null, function (intl) {
    return React.createElement(_context2.Consumer, null, function (brand) {
      return React.createElement(React.Fragment, null, React.createElement(_ModalHeader.default, null, _ref2, _ref3, React.createElement(_Text2.default, {
        t: "account.sign_in_description",
        values: {
          brandName: brand.name
        }
      })), React.createElement(_ModalSection.default, {
        dataTest: "AccountPassword"
      }, React.createElement("form", {
        onSubmit: onSignIn
      }, React.createElement(_Stack.default, null, error && _ref4, _ref5, React.createElement(_Stack.default, {
        align: "end",
        spacing: "condensed"
      }, React.createElement(_InputField.default, {
        label: intl.translate("account.password_input"),
        error: passwordError && intl.translate(passwordError),
        type: "password",
        onChange: onPasswordChange,
        value: password,
        name: "password",
        dataTest: "Password"
      }), _ref6), _ref7))), React.createElement(_ModalSection.default, null, React.createElement(_Text2.default, {
        spaceAfter: "normal",
        t: "account.send_link_to",
        values: {
          email: email
        }
      }), _ref8));
    });
  });
};

var _default = AccountPassword;
exports.default = _default;