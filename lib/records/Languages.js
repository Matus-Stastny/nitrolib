"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNames = exports.getByContinent = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _is2 = _interopRequireDefault(require("ramda/src/is"));

// eslint-disable-next-line import/prefer-default-export
var getByContinent = function getByContinent(languages, continent) {
  return languages.filter(function (language) {
    return (0, _is2.default)(String, language.continent) ? continent === language.continent : language.continent.includes(continent);
  });
};

exports.getByContinent = getByContinent;

var getNames = function getNames(lang) {
  var _lang$name$split = lang.name.split(" ("),
      _lang$name$split2 = (0, _slicedToArray2.default)(_lang$name$split, 2),
      _lang$name$split2$ = _lang$name$split2[0],
      primary = _lang$name$split2$ === void 0 ? "" : _lang$name$split2$,
      _lang$name$split2$2 = _lang$name$split2[1],
      secondary = _lang$name$split2$2 === void 0 ? "" : _lang$name$split2$2;

  return {
    primary: primary,
    secondary: secondary.replace(/\)/g, "")
  };
};

exports.getNames = getNames;