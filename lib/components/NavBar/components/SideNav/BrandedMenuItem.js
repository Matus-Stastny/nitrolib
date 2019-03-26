"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var BrandedMenuItem = function BrandedMenuItem(_ref) {
  var title = _ref.title,
      Icon = _ref.Icon,
      link = _ref.link;
  return React.createElement(_MenuItem.default, {
    link: link,
    Icon: Icon,
    text: React.createElement(_Translate.default, {
      t: title,
      values: {
        companyName: "Kiwi.com"
      }
    })
  });
};

var _default = BrandedMenuItem;
exports.default = _default;