"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Theme = require("../../../../records/Theme");

var _separateList = _interopRequireDefault(require("../../services/separateList"));

var _Flex = _interopRequireDefault(require("../../../../primitives/Flex"));

var _button = _interopRequireDefault(require("../../../../styles/mixins/button"));

var _index = _interopRequireDefault(require("../../../Tooltip/index"));

var _index2 = _interopRequireDefault(require("../Item/index"));

var _Code = _interopRequireDefault(require("../../primitives/Code"));

var _Name = _interopRequireDefault(require("../../primitives/Name"));

var _Sign = _interopRequireDefault(require("../../primitives/Sign"));

var COLUMNS = 4;

var Column = _styledComponents.default.div.withConfig({
  displayName: "List__Column",
  componentId: "sc-1ofbj4i-0"
})(["width:100%;", ";"], _mediaQuery.default.largeMobile((0, _styledComponents.css)(["width:", "%;"], 100 / COLUMNS)));

var Item = _styledComponents.default.div.withConfig({
  displayName: "List__Item",
  componentId: "sc-1ofbj4i-1"
})(["", ";"], _mediaQuery.default.largeMobile((0, _styledComponents.css)(["padding-", ":25px;"],
/* sc-custom "right" */
_rtl.right)));

Item.defaultProps = {
  theme: _Theme.themeDefault
};

var ItemText = _styledComponents.default.button.withConfig({
  displayName: "List__ItemText",
  componentId: "sc-1ofbj4i-2"
})(["", ";display:flex;line-height:30px;width:100%;padding-", ":5px;border-radius:", ";cursor:pointer;background:", ";&:hover{background:", ";}", "{font-weight:bold;color:", ";}", "{margin-", ":10px;color:", ";}", "{margin-", ":10px;color:", ";}", ";"], _button.default,
/* sc-custom "left" */
_rtl.left, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.borderRadiusNormal;
}, function (_ref2) {
  var theme = _ref2.theme,
      active = _ref2.active;
  return active ? theme.orbit.paletteProductNormal : "transparent";
}, function (_ref3) {
  var theme = _ref3.theme,
      active = _ref3.active;
  return theme.orbit[active ? "paletteProductNormal" : "paletteCloudNormal"];
}, _Code.default, function (_ref4) {
  var theme = _ref4.theme,
      active = _ref4.active;
  return theme.orbit[active ? "paletteWhite" : "paletteInkNormal"];
}, _Name.default,
/* sc-custom "left" */
_rtl.left, function (_ref5) {
  var theme = _ref5.theme,
      active = _ref5.active;
  return theme.orbit[active ? "paletteWhite" : "paletteInkNormal"];
}, _Sign.default,
/* sc-custom "left" */
_rtl.left, function (_ref6) {
  var theme = _ref6.theme,
      active = _ref6.active;
  return theme.orbit[active ? "paletteWhite" : "paletteInkNormal"];
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["", "{display:none;}"], _Name.default)));

ItemText.defaultProps = {
  theme: _Theme.themeDefault
};

var Tip = _styledComponents.default.span.withConfig({
  displayName: "List__Tip",
  componentId: "sc-1ofbj4i-3"
})(["white-space:nowrap;"]);

var List = function List(_ref7) {
  var active = _ref7.active,
      list = _ref7.list,
      onSetCurrency = _ref7.onSetCurrency;
  return React.createElement(_Flex.default, {
    wrap: "wrap"
  }, (0, _separateList.default)(COLUMNS, list).map(function (items, i) {
    return React.createElement(Column, {
      key: items.reduce(function (acc, next) {
        return acc + next.id;
      }, "")
    }, items.map(function (item) {
      return React.createElement(Item, {
        key: item.id,
        "data-test": "Currency-Item-".concat(item.id)
      }, React.createElement(_index.default, {
        position: i > 1 ? "left" : "right",
        tip: React.createElement(Tip, null, item.name)
      }, React.createElement(_Text.default, null, React.createElement(ItemText, {
        active: item.id === active.id,
        onClick: function onClick() {
          return onSetCurrency(item.id);
        }
      }, React.createElement(_index2.default, {
        item: item
      })))));
    }));
  }));
};

var _default = List;
exports.default = _default;