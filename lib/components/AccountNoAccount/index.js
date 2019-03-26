"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Heading = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Heading"));

var _ButtonLink = _interopRequireDefault(require("@kiwicom/orbit-components/lib/ButtonLink"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _Illustration = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Illustration"));

var _Facebook = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Facebook"));

var _Google = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Google"));

var _ChevronLeft = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/ChevronLeft"));

var _ModalHeader = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalHeader"));

var _ModalSection = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalSection"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Translate = _interopRequireDefault(require("../Translate"));

var _Text = _interopRequireDefault(require("../Text"));

var _context = require("../../services/brand/context");

var _ref2 =
/*#__PURE__*/
React.createElement(_Illustration.default, {
  name: "NoResults",
  size: "small"
});

var _ref3 =
/*#__PURE__*/
React.createElement(_Heading.default, {
  element: "h2"
}, React.createElement(_Translate.default, {
  t: "account.no_bookings_or_account"
}));

var _ref5 =
/*#__PURE__*/
React.createElement(_Text.default, {
  t: "account.or_social_account",
  weight: "bold",
  spaceAfter: "medium"
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
  t: "account.register"
});

var _ref9 =
/*#__PURE__*/
React.createElement(_ChevronLeft.default, null);

var _ref10 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.back"
});

var AccountNoAccount = function AccountNoAccount(_ref) {
  var onBack = _ref.onBack,
      onRegister = _ref.onRegister,
      onFacebookLogin = _ref.onFacebookLogin,
      onGoogleLogin = _ref.onGoogleLogin;

  var _ref4 =
  /*#__PURE__*/
  React.createElement(_ModalSection.default, null, React.createElement(_Stack.default, {
    spacing: "natural",
    direction: "column"
  }, React.createElement(_Button.default, {
    onClick: onRegister
  }, _ref8), React.createElement(_ButtonLink.default, {
    type: "secondary",
    iconLeft: _ref9,
    onClick: onBack
  }, _ref10)));

  return React.createElement(_context.Consumer, null, function (brand) {
    return React.createElement(React.Fragment, null, React.createElement(_ModalHeader.default, null, _ref2, _ref3, React.createElement(_Text.default, {
      t: "account.no_bookings_or_account_description",
      values: {
        brandName: brand.name
      }
    })), _ref4, React.createElement(_ModalSection.default, {
      suppressed: true
    }, _ref5, React.createElement(_Stack.default, {
      spacing: "natural",
      flex: true
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
};

var _default = AccountNoAccount;
exports.default = _default;