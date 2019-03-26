"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../Link"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var Links = function Links(_ref) {
  var inverted = _ref.inverted,
      services = _ref.services,
      active = _ref.active;
  return services.map(function (item) {
    return React.createElement(_Link.default, {
      key: item.id,
      link: item.url,
      icon: item.id,
      text: React.createElement(_Translate.default, {
        t: item.translation
      }),
      inverted: inverted,
      active: item.id === active,
      newWindow: item.newWindow
    });
  });
};

var _default = Links;
exports.default = _default;