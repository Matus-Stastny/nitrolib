"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTextFromCategory;

var React = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../../components/Translate/index"));

var _ref =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.select.personal_item"
});

var _ref2 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.select.cabin_bag"
});

function getTextFromCategory(category, transform) {
  switch (category) {
    case "personalItem":
      return _ref;

    case "cabinBag":
      return _ref2;

    case "holdBag":
      return React.createElement(_index.default, {
        t: "baggage_modal.select.checked_bag",
        transform: transform
      });

    default:
      return null;
  }
}