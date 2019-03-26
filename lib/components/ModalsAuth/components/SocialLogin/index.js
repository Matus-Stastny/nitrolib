"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _Facebook = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Facebook"));

var _Google = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Google"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _index = _interopRequireDefault(require("../../../Translate/index"));

var _Theme = require("../../../../records/Theme");

var STACK_DESKTOP = {
  direction: "row"
};

var Or = _styledComponents.default.div.withConfig({
  displayName: "SocialLogin__Or",
  componentId: "sc-1mdvxiy-0"
})(["position:relative;padding:12px 0;"]);

var OrLine = _styledComponents.default.hr.withConfig({
  displayName: "SocialLogin__OrLine",
  componentId: "sc-1mdvxiy-1"
})(["width:100%;border-top:1px solid ", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteCloudNormal;
});

OrLine.defaultProps = {
  theme: _Theme.themeDefault
};

var OrText = _styledComponents.default.span.withConfig({
  displayName: "SocialLogin__OrText",
  componentId: "sc-1mdvxiy-2"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:10px;background:", ";text-transform:uppercase;color:", ";font-size:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteWhite;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.fontSizeTextNormal;
});

OrText.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref6 =
/*#__PURE__*/
React.createElement(_Google.default, null);

var _ref7 =
/*#__PURE__*/
React.createElement(_Facebook.default, null);

var _ref8 =
/*#__PURE__*/
React.createElement(Or, null, React.createElement(OrLine, null), React.createElement(OrText, null, React.createElement(_index.default, {
  t: "common.or"
})));

var SocialLogin = function SocialLogin(_ref5) {
  var facebook = _ref5.facebook,
      google = _ref5.google,
      onSocialAuth = _ref5.onSocialAuth;
  return React.createElement(React.Fragment, null, React.createElement(_Stack.default, {
    desktop: STACK_DESKTOP,
    direction: "column"
  }, google && React.createElement(_Button.default, {
    block: true,
    type: "google",
    bordered: true,
    icon: _ref6,
    onClick: function onClick() {
      return onSocialAuth("google");
    }
  }, React.createElement(_index.default, {
    t: "account.log_in_with",
    values: {
      provider: "Google"
    }
  })), facebook && React.createElement(_Button.default, {
    type: "facebook",
    bordered: true,
    block: true,
    icon: _ref7,
    onClick: function onClick() {
      return onSocialAuth("facebook");
    }
  }, React.createElement(_index.default, {
    t: "account.log_in_with",
    values: {
      provider: "Facebook"
    }
  }))), _ref8);
};

var _default = SocialLogin;
exports.default = _default;