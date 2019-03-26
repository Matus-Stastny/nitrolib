"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Close = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Close"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _index = _interopRequireDefault(require("../../../../../Translate/index"));

var _ref2 =
/*#__PURE__*/
React.createElement(_Close.default, {
  size: "medium"
});

var _ref3 =
/*#__PURE__*/
React.createElement(_Stack.default, {
  flex: true,
  align: "center",
  justify: "end",
  inline: true
}, React.createElement(_Text.default, {
  element: "p",
  weight: "bold",
  type: "secondary"
}, React.createElement(_index.default, {
  t: "baggage_modal.select.current"
})));

var EmptyLabel = function EmptyLabel(_ref) {
  var pickerType = _ref.pickerType,
      isCurrentCombination = _ref.isCurrentCombination;
  return React.createElement(_Stack.default, {
    spacing: "condensed",
    flex: true,
    align: "center",
    justify: "between",
    dataTest: "BaggagePicker-EmptyLabel"
  }, React.createElement(_Stack.default, {
    flex: true,
    align: "center",
    inline: true
  }, _ref2, React.createElement(_Text.default, null, React.createElement(_index.default, {
    t: pickerType === "handBag" ? "baggage_modal.select.no_cabin_baggage" : "baggage_modal.select.no_checked_baggage"
  }))), isCurrentCombination && _ref3);
};

var _default = EmptyLabel;
exports.default = _default;