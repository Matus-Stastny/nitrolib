"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _Theme = require("../../../../../records/Theme");

var Column = _styledComponents.default.section.withConfig({
  displayName: "Column",
  componentId: "sc-4blorj-0"
})(["padding-", ":25px;padding-", ":5px;display:flex;flex-direction:column;"],
/* sc-custom "left" */
_rtl.left,
/* sc-custom "right" */
_rtl.right);

Column.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = Column;
exports.default = _default;