"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Currency = require("../../../../records/Currency");

var _Code = _interopRequireDefault(require("../../primitives/Code"));

var _Sign = _interopRequireDefault(require("../../primitives/Sign"));

var _Name = _interopRequireDefault(require("../../primitives/Name"));

var NameSeparator = _styledComponents.default.span.withConfig({
  displayName: "Item__NameSeparator",
  componentId: "sc-1k9xvj2-0"
})(["margin:0 5px;", ";"], _mediaQuery.default.largeMobile((0, _styledComponents.css)(["display:none;"])));

var _ref2 =
/*#__PURE__*/
React.createElement(NameSeparator, null, "-");

var Item = function Item(_ref) {
  var item = _ref.item;
  return React.createElement(React.Fragment, null, React.createElement(_Code.default, null, (0, _Currency.getCode)(item.id)), React.createElement(_Sign.default, null, (0, _Currency.getSymbol)(item.format)), _ref2, React.createElement(_Name.default, null, item.name));
};

var _default = Item;
exports.default = _default;