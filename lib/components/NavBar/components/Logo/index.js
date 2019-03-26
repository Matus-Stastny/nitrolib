"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Logo = _interopRequireDefault(require("../../../Logo"));

var _context = require("../../../../services/intl/context");

var _context2 = require("../../../../services/brand/context");

var Logo = function Logo(_ref) {
  var inverted = _ref.inverted,
      onClick = _ref.onClick;
  return _react.default.createElement(_context.Consumer, null, function (_ref2) {
    var language = _ref2.language;
    return _react.default.createElement(_context2.Consumer, null, function (brand) {
      return _react.default.createElement(_Logo.default, {
        id: brand.id,
        languageId: language.id,
        redirectUrl: brand.home_redirect_url,
        poweredByKiwi: brand.powered_by_kiwi,
        title: brand.name,
        onClick: onClick,
        inverted: inverted
      });
    });
  });
};

var _default = Logo;
exports.default = _default;