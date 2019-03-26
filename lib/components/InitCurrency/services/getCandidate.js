"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getCandidate(_ref) {
  var initial = _ref.initial,
      country = _ref.country,
      lang = _ref.lang;

  if (initial !== "") {
    return initial;
  }

  if (country) {
    return country;
  }

  return lang;
}

var _default = getCandidate;
exports.default = _default;