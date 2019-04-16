"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIconFromCategory;

var React = _interopRequireWildcard(require("react"));

var _BaggageChecked = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/BaggageChecked"));

var _BaggagePersonalItem = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/BaggagePersonalItem"));

var _BaggageCabin = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/BaggageCabin"));

function getIconFromCategory(category, size, color) {
  switch (category) {
    case "personalItem":
      return React.createElement(_BaggagePersonalItem.default, {
        size: size,
        color: color
      });

    case "cabinBag":
      return React.createElement(_BaggageCabin.default, {
        size: size,
        color: color
      });

    case "holdBag":
      return React.createElement(_BaggageChecked.default, {
        size: size,
        color: color
      });

    default:
      return null;
  }
}