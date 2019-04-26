"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterNewDefinitions;

function filterNewDefinitions(definitions, bagType) {
  return definitions.filter(function (def) {
    if (bagType === "handBag") {
      return def.category === "cabinBag" || def.category === "personalItem";
    }

    return def.category === "holdBag";
  });
}