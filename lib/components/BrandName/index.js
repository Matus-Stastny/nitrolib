"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _context = require("../../services/brand/context");

var BrandName = function BrandName() {
  return React.createElement(_context.Consumer, null, function (brand) {
    return brand.name;
  });
};

var _default = BrandName;
exports.default = _default;