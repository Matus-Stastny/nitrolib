"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _context = require("../../../../services/brand/context");

var _context2 = require("../../../../services/auth/context");

var _SocialLogin = _interopRequireDefault(require("../SocialLogin"));

var _Switch = _interopRequireDefault(require("../Switch"));

var Login = function Login(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      children = _ref.children;

  var _ref2 =
  /*#__PURE__*/
  React.createElement(_Switch.default, {
    value: value,
    onChange: onChange
  });

  return React.createElement(_context2.Consumer, null, function (auth) {
    return React.createElement(React.Fragment, null, React.createElement(_context.Consumer, null, function (brand) {
      return (brand.auth.social_facebook.enabled || brand.auth.social_google.enabled) && React.createElement(_SocialLogin.default, {
        facebook: brand.auth.social_facebook.enabled,
        google: brand.auth.social_google.enabled,
        onSocialAuth: auth.onSocialAuth
      });
    }), _ref2, children);
  });
};

var _default = Login;
exports.default = _default;