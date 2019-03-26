"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intlDefault = void 0;

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _LangInfo = require("./LangInfo");

// fallback
// eslint-disable-next-line import/prefer-default-export
var intlDefault = {
  language: _LangInfo.langInfoDefault,
  translations: {},
  translate: function translate(id) {
    return id;
  },
  getLocale: Promise.resolve(_enUS.default)
};
exports.intlDefault = intlDefault;