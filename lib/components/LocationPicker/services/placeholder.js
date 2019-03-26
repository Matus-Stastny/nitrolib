"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var placeholder = function placeholder(loc) {
  var type = loc.type,
      name = loc.name;

  switch (type) {
    case "city":
    case "autonomous_territory":
      return "".concat(name, " ").concat(loc.country ? "(".concat(loc.country.name, ")") : "");

    case "airport":
    case "station":
      return "".concat(name, " ").concat(loc.code ? "(".concat(loc.code, ")") : "");

    default:
      return name;
  }
};

var _default = placeholder;
exports.default = _default;