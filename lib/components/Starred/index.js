"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _StarFull = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/StarFull"));

var _Button = _interopRequireDefault(require("../NavBar/primitives/Button"));

var _Text = _interopRequireDefault(require("../Text"));

var _Toggle = _interopRequireDefault(require("../Toggle"));

var _ClickOutside = _interopRequireDefault(require("../ClickOutside"));

var _Desktop = _interopRequireDefault(require("../Desktop"));

var _Mobile = _interopRequireDefault(require("../Mobile"));

var _ref3 =
/*#__PURE__*/
React.createElement(_Text.default, {
  t: "starred.starred"
});

var _ref4 =
/*#__PURE__*/
React.createElement(_StarFull.default, {
  color: "primary"
});

var Starred = function Starred(_ref) {
  var children = _ref.children;
  return React.createElement(_Toggle.default, null, function (_ref2) {
    var open = _ref2.open,
        onToggle = _ref2.onToggle;
    return React.createElement(React.Fragment, null, open && React.createElement(_ClickOutside.default, {
      onClickOutside: onToggle
    }, children), React.createElement(_Desktop.default, null, React.createElement(_Button.default, {
      onClick: onToggle
    }, _ref3)), React.createElement(_Mobile.default, null, React.createElement(_Button.default, {
      onClick: onToggle
    }, _ref4)));
  });
};

var _default = Starred;
exports.default = _default;