"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Theme = require("../../../records/Theme");

var IconWrapper = _styledComponents.default.i.withConfig({
  displayName: "IconWrapper",
  componentId: "sc-107x786-0"
})(["color:", ";display:block;cursor:pointer;padding-right:10px;", ";"], function (_ref) {
  var theme = _ref.theme,
      inverted = _ref.inverted,
      act = _ref.act;
  return inverted && (!act ? theme.orbit.paletteWhite : theme.orbit.paletteInkNormal);
}, function (_ref2) {
  var act = _ref2.act;
  return act && (0, _styledComponents.css)(["color:", ";svg:nth-child(2){transform:rotate(180deg);}"], function (_ref3) {
    var theme = _ref3.theme,
        inverted = _ref3.inverted;
    return inverted ? theme.orbit.paletteWhite : theme.orbit.paletteProductNormal;
  });
});

IconWrapper.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = IconWrapper;
exports.default = _default;