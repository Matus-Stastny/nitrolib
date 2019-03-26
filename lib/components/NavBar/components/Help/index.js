"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _QuestionCircle = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/QuestionCircle"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _Button = _interopRequireDefault(require("../../primitives/Button"));

var _Desktop = _interopRequireDefault(require("../../../Desktop"));

var _Mobile = _interopRequireDefault(require("../../../Mobile"));

var _ref2 =
/*#__PURE__*/
React.createElement(_Desktop.default, null, React.createElement(_Translate.default, {
  t: "common.help"
}));

var _ref3 =
/*#__PURE__*/
React.createElement(_Mobile.default, null, React.createElement(_QuestionCircle.default, null));

var Help = function Help(_ref) {
  var onOpen = _ref.onOpen,
      inverted = _ref.inverted;
  return React.createElement(_Button.default, {
    "data-test": "NavBar-Help",
    onClick: onOpen,
    disabled: !onOpen,
    color: !inverted && "secondary"
  }, _ref2, _ref3);
};

var _default = Help;
exports.default = _default;