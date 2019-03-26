"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function translate(translations, key) {
  var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var translation = translations[key];

  if (!translation) {
    return key;
  }

  return Object.keys(values).reduce(function (acc, placeholder) {
    return acc.replace(new RegExp("__".concat(placeholder, "__"), "g"), String(values[placeholder]));
  }, translation);
}

var _default = translate;
exports.default = _default;