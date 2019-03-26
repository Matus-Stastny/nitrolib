"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _button = _interopRequireDefault(require("../../styles/mixins/button"));

var _Theme = require("../../records/Theme");

var _Toggle = _interopRequireDefault(require("../Toggle"));

var _ClickOutside = _interopRequireDefault(require("../ClickOutside"));

var OpenButton = _styledComponents.default.button.withConfig({
  displayName: "CustomPicker__OpenButton",
  componentId: "zli13g-0"
})(["", ";display:flex;align-items:center;background:transparent;color:", ";font-weight:", ";font-family:", ";font-size:", ";&:hover{color:", ";}"], _button.default, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.fontWeightMedium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.fontFamily;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.fontSizeTextSmall;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.paletteProductNormal;
});

OpenButton.defaultProps = {
  theme: _Theme.themeDefault
};

var CustomPicker = function CustomPicker(_ref6) {
  var openButton = _ref6.openButton,
      _onChange = _ref6.onChange,
      children = _ref6.children;
  return React.createElement(_Toggle.default, null, function (_ref7) {
    var open = _ref7.open,
        onToggle = _ref7.onToggle;
    return React.createElement(_ClickOutside.default, {
      active: open,
      onClickOutside: onToggle
    }, React.createElement(React.Fragment, null, React.createElement(OpenButton, {
      onClick: onToggle
    }, openButton), open && children({
      onChange: function onChange(input) {
        _onChange(input);

        onToggle();
      }
    })));
  });
};

var _default = CustomPicker;
exports.default = _default;