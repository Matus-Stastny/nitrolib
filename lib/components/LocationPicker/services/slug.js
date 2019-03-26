"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var slug = function slug(loc) {
  switch (loc.type) {
    case "airport":
    case "station":
      return loc.code ? "(".concat(loc.code, ")") : "";

    case "city":
    case "autonomous_territory":
      return loc.country && loc.country.name ? "(".concat(loc.country.name, ")") : "";

    default:
      return "";
  }
};

var _default = slug;
exports.default = _default;