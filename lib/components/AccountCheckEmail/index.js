"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Heading = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Heading"));

var _Illustration = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Illustration"));

var _ModalSection = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalSection"));

var _Text = _interopRequireDefault(require("../Text"));

var _Translate = _interopRequireDefault(require("../Translate"));

var _ref2 =
/*#__PURE__*/
React.createElement(_Heading.default, {
  element: "h2",
  spaceAfter: "small"
}, React.createElement(_Translate.default, {
  t: "account.check_email"
}));

var _ref3 =
/*#__PURE__*/
React.createElement(_Illustration.default, {
  name: "Mailbox",
  size: "medium",
  spaceAfter: "large"
});

var _ref4 =
/*#__PURE__*/
React.createElement(_Text.default, {
  t: "account.you_will_recieve_password"
});

var AccountCheckEmail = function AccountCheckEmail(_ref) {
  var email = _ref.email,
      reason = _ref.reason;
  return React.createElement(_ModalSection.default, {
    dataTest: "AccountCheckEmail"
  }, _ref2, _ref3, reason === "magicLink" && React.createElement(_Text.default, {
    t: "account.check_email_magic_link",
    values: {
      email: email
    }
  }), reason === "signUpConfirmation" && React.createElement(_Text.default, {
    t: "account.check_email_sign_up",
    values: {
      email: email
    }
  }), reason === "resetPassword" && _ref4);
};

var _default = AccountCheckEmail;
exports.default = _default;