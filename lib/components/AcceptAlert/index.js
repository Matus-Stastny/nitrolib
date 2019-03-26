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

var _styles = require("../../styles");

var _Theme = require("../../records/Theme");

var _Translate = _interopRequireDefault(require("../Translate"));

var Container = _styledComponents.default.div.withConfig({
  displayName: "AcceptAlert__Container",
  componentId: "sc-12vb1v8-0"
})(["padding:", "px;background:", ";"], _styles.padding.page, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteWhite;
});

Container.defaultProps = {
  theme: _Theme.themeDefault
};

var Message = _styledComponents.default.div.withConfig({
  displayName: "AcceptAlert__Message",
  componentId: "sc-12vb1v8-1"
})(["margin-bottom:15px;"]);

var _ref3 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "common.ok"
});

var AcceptAlert = function AcceptAlert(_ref2) {
  var children = _ref2.children,
      button = _ref2.button,
      onClose = _ref2.onClose;
  return React.createElement(Container, null, React.createElement(Message, null, children), React.createElement(_Button.default, {
    block: true,
    onClick: onClose
  }, button || _ref3));
};

var _default = AcceptAlert;
exports.default = _default;