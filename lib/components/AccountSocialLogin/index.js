"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Heading = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Heading"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _Illustration = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Illustration"));

var _Facebook = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Facebook"));

var _Google = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Google"));

var _ModalHeader = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalHeader"));

var _ModalSection = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalSection"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Translate = _interopRequireDefault(require("../Translate"));

var _Text = _interopRequireDefault(require("../Text"));

var BUTTON_ICON = {
  facebook: React.createElement(_Facebook.default, null),
  google: React.createElement(_Google.default, null)
};
var PROVIDER = {
  google: "Google",
  facebook: "Facebook"
};

var _ref2 =
/*#__PURE__*/
React.createElement(_Illustration.default, {
  name: "Login",
  size: "small"
});

var _ref3 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.ask_sign_in_link"
});

var AccountSocialLogin = function AccountSocialLogin(_ref) {
  var onAskSignInLink = _ref.onAskSignInLink,
      onSocialLogin = _ref.onSocialLogin,
      email = _ref.email,
      pairedWith = _ref.pairedWith;
  return React.createElement(React.Fragment, null, React.createElement(_ModalHeader.default, null, _ref2, React.createElement(_Heading.default, {
    element: "h2"
  }, React.createElement(_Translate.default, {
    t: "account.login_title.paired_with_social",
    values: {
      provider: PROVIDER[pairedWith]
    }
  })), React.createElement(_Text.default, {
    t: "account.login_description.paired_with_social",
    values: {
      provider: PROVIDER[pairedWith]
    }
  })), React.createElement(_ModalSection.default, null, React.createElement(_Stack.default, {
    flex: true,
    direction: "column",
    spacing: "condensed",
    desktop: {
      direction: "row"
    }
  }, React.createElement(_Button.default, {
    type: pairedWith,
    bordered: true,
    icon: BUTTON_ICON[pairedWith],
    onClick: onSocialLogin
  }, React.createElement(_Translate.default, {
    t: "account.log_in_with",
    values: {
      provider: PROVIDER[pairedWith]
    }
  })))), React.createElement(_ModalSection.default, null, React.createElement(_Text.default, {
    spaceAfter: "normal",
    t: "account.send_link_to",
    values: {
      email: email
    }
  }), React.createElement(_Button.default, {
    type: "secondary",
    onClick: onAskSignInLink
  }, _ref3)));
};

var _default = AccountSocialLogin;
exports.default = _default;