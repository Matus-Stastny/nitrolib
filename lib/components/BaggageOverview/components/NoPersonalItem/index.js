"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _BaggagePersonalItemNone = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/BaggagePersonalItemNone"));

var _index = _interopRequireDefault(require("../../../Translate/index"));

var _ref =
/*#__PURE__*/
React.createElement(_Stack.default, {
  shrink: true,
  spacing: "condensed",
  align: "center",
  dataTest: "BaggageOverview-NoPersonalItem"
}, React.createElement(_BaggagePersonalItemNone.default, {
  size: "medium",
  color: "primary"
}), React.createElement(_Text.default, null, React.createElement(_index.default, {
  t: "baggage_modal.select.no_personal_item"
})));

var NoPersonalItem = function NoPersonalItem() {
  return _ref;
};

var _default = NoPersonalItem;
exports.default = _default;