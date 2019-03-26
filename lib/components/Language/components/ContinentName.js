"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Continents = require("../../../records/Continents");

var _Translate = _interopRequireDefault(require("../../Translate"));

var ContinentName = function ContinentName(_ref) {
  var id = _ref.id;
  return React.createElement(_Translate.default, {
    t: _Continents.tKeys[id]
  });
};

var _default = ContinentName;
exports.default = _default;