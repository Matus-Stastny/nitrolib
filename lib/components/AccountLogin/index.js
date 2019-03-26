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

var _Facebook = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Facebook"));

var _Google = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Google"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _ModalSection = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalSection"));

var _Translate = _interopRequireDefault(require("../Translate"));

var _Text = _interopRequireDefault(require("../Text"));

var _context = require("../../services/intl/context");

var _context2 = require("../../services/brand/context");

var ILLUSTRATION = {
  help: "Help",
  refer: "ReferAFriend",
  mmb: "Login"
};
var TITLE_TKEY = {
  help: "account.login_title.get_help",
  refer: "account.login_title.refer",
  mmb: "account.manage_your_bookings"
};
var DESC_TKEY = {
  help: "account.login_description.help",
  refer: "account.login_description.refer",
  mmb: "account.sign_in_description"
};

var _ref3 =
/*#__PURE__*/
React.createElement(_Text.default, {
  weight: "bold",
  t: "account.sign_in_hint"
});

var _ref5 =
/*#__PURE__*/
React.createElement(_Text.default, {
  weight: "bold",
  spaceAfter: "medium",
  t: "account.or_social_account"
});

var _ref6 =
/*#__PURE__*/
React.createElement(_Facebook.default, null);

var _ref7 =
/*#__PURE__*/
React.createElement(_Google.default, null);

var _ref8 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.continue"
});

var AccountLogin = function AccountLogin(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "mmb" : _ref$type,
      email = _ref.email,
      error = _ref.error,
      isLoading = _ref.isLoading,
      emailError = _ref.emailError,
      disableSocialLogin = _ref.disableSocialLogin,
      onGoogleLogin = _ref.onGoogleLogin,
      onFacebookLogin = _ref.onFacebookLogin,
      onEmailChange = _ref.onEmailChange,
      onEmailBlur = _ref.onEmailBlur,
      onContinue = _ref.onContinue;

  var _ref2 =
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
  }, _ref8);

  return React.createElement(_context.Consumer, null, function (intl) {
    return React.createElement(_context2.Consumer, null, function (brand) {
      return React.createElement(React.Fragment, null, React.createElement(_ModalSection.default, null, React.createElement(_Illustration.default, {
        name: ILLUSTRATION[type],
        size: "small",
        spaceAfter: "small"
      }), React.createElement(_Heading.default, {
        element: "h2",
        spaceAfter: "small"
      }, React.createElement(_Translate.default, {
        t: TITLE_TKEY[type]
      })), React.createElement(_Text.default, {
        t: DESC_TKEY[type],
        values: {
          brandName: brand.name
        }
      })), React.createElement(_ModalSection.default, {
        dataTest: "AccountLogin"
      }, React.createElement("form", {
        onSubmit: onContinue
      }, React.createElement(_Stack.default, null, error && _ref2, _ref3, React.createElement(_Stack.default, {
        spaceAfter: "small",
        spacing: "condensed",
        align: "end"
      }, React.createElement(_InputField.default, {
        label: intl.translate("account.email"),
        placeholder: intl.translate("account.email_placeholder"),
        value: email,
        error: emailError && intl.translate(emailError),
        onChange: onEmailChange,
        onBlur: onEmailBlur,
        name: "email",
        dataTest: "Email"
      }), _ref4)))), !disableSocialLogin && React.createElement(_ModalSection.default, {
        suppressed: true
      }, _ref5, React.createElement(_Stack.default, {
        spacing: "natural",
        align: "end"
      }, React.createElement(_Button.default, {
        type: "facebook",
        block: true,
        bordered: true,
        icon: _ref6,
        onClick: onFacebookLogin
      }, React.createElement(_Translate.default, {
        t: "account.log_in_with",
        values: {
          provider: "Facebook"
        }
      })), React.createElement(_Button.default, {
        type: "google",
        block: true,
        bordered: true,
        icon: _ref7,
        onClick: onGoogleLogin
      }, React.createElement(_Translate.default, {
        t: "account.log_in_with",
        values: {
          provider: "Google"
        }
      })))));
    });
  });
};

var _default = AccountLogin;
exports.default = _default;