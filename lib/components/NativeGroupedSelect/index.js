"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Theme = require("../../records/Theme");

var Container = _styledComponents.default.div.withConfig({
  displayName: "NativeGroupedSelect__Container",
  componentId: "sc-1oks2t6-0"
})(["display:flex;align-items:center;"]);

var IconContainer = _styledComponents.default.div.withConfig({
  displayName: "NativeGroupedSelect__IconContainer",
  componentId: "sc-1oks2t6-1"
})(["width:24px;height:21px;display:flex;align-items:center;"]);

var Select = _styledComponents.default.select.withConfig({
  displayName: "NativeGroupedSelect__Select",
  componentId: "sc-1oks2t6-2"
})(["appearance:none;cursor:pointer;background-color:transparent;margin-left:11px;border:0;outline:0;font-size:", ";line-height:21px;font-weight:", ";color:", ";font-family:", ";&:hover{color:", ";}", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.fontSizeTextNormal;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.fontWeightMedium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.fontFamily;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.paletteProductNormal;
}, function (_ref6) {
  var hideNativeText = _ref6.hideNativeText;
  return hideNativeText && (0, _styledComponents.css)(["width:24px;margin-left:-24px;color:transparent;&:hover{color:transparent;}& > optgroup{color:initial;}"]);
});

Select.defaultProps = {
  theme: _Theme.themeDefault,
  hideNativeText: false
};

var NativeGroupedSelect = function NativeGroupedSelect(_ref7) {
  var icon = _ref7.icon,
      value = _ref7.value,
      groups = _ref7.groups,
      divider = _ref7.divider,
      hideNativeText = _ref7.hideNativeText,
      _onChange = _ref7.onChange;
  return React.createElement(Container, null, React.createElement(IconContainer, null, icon), React.createElement(Select, {
    value: value,
    hideNativeText: hideNativeText,
    onChange: function onChange(ev) {
      return _onChange(ev.target.value);
    }
  }, groups.filter(function (group) {
    return group.items.length > 0;
  }).map(function (group, index) {
    return React.createElement("optgroup", {
      key: group.key,
      label: index > 0 ? divider : null
    }, group.items.map(function (item) {
      return React.createElement("option", {
        key: item.value,
        value: item.value
      }, item.text);
    }));
  })));
};

NativeGroupedSelect.defaultProps = {
  icon: null,
  divider: "-----------------",
  hideNativeText: false
};
var _default = NativeGroupedSelect;
exports.default = _default;