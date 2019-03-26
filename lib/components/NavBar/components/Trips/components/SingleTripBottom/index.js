"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Theme = require("../../../../../../records/Theme");

var _Button = _interopRequireDefault(require("../../../../../Button"));

var _context = require("../../../../../../services/auth/context");

var BottomWrapper = _styledComponents.default.div.withConfig({
  displayName: "SingleTripBottom__BottomWrapper",
  componentId: "sc-1k90tqe-0"
})(["background:", ";box-shadow:inset 0 -1px ", ";display:flex;justify-content:center;align-items:center;padding:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteWhite;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteCloudNormal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.spaceSmall;
});

BottomWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var SingleTripBottom = function SingleTripBottom() {
  return React.createElement(_context.Consumer, null, function (_ref4) {
    var onSignOut = _ref4.onSignOut;
    return React.createElement(BottomWrapper, null, React.createElement(_Button.default, {
      block: true,
      type: "secondary",
      onClick: onSignOut,
      t: "account.log_out"
    }));
  });
};

var _default = SingleTripBottom;
exports.default = _default;