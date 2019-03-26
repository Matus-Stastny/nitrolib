"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _expandMore = _interopRequireDefault(require("react-icons/lib/md/expand-more"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _border = _interopRequireDefault(require("../../styles/mixins/border"));

var _Theme = require("../../records/Theme");

var Container = _styledComponents.default.div.withConfig({
  displayName: "Select__Container",
  componentId: "gh9o4l-0"
})(["position:relative;"]);

var StyledSelect = _styledComponents.default.select.withConfig({
  displayName: "Select__StyledSelect",
  componentId: "gh9o4l-1"
})(["appearance:none;height:46px;line-height:46px;background-color:", ";width:100%;", ";padding:0 15px;cursor:pointer;:focus{outline:none;}&::-ms-expand{border:0;background:none;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteWhite;
}, _border.default);

StyledSelect.defaultProps = {
  theme: _Theme.themeDefault
};

var Icon = _styledComponents.default.span.withConfig({
  displayName: "Select__Icon",
  componentId: "gh9o4l-2"
})(["pointer-events:none;position:absolute;top:13px;", ":13px;"], _rtl.right);

Icon.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref3 =
/*#__PURE__*/
React.createElement(Icon, null, React.createElement(_expandMore.default, null));

var Select = function Select(_ref2) {
  var id = _ref2.id,
      value = _ref2.value,
      onChange = _ref2.onChange,
      children = _ref2.children;
  return React.createElement(Container, null, React.createElement(StyledSelect, {
    id: id,
    value: value,
    onChange: onChange,
    state: "base"
  }, children), _ref3);
};

var _default = Select;
exports.default = _default;