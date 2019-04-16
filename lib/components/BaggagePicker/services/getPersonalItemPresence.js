"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPersonalItemPresence;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _values2 = _interopRequireDefault(require("ramda/src/values"));

function getPersonalItemPresence(_ref) {
  var pickerType = _ref.pickerType,
      options = _ref.options;
  if (pickerType === "holdBag") return false;
  return options.reduce(function (acc, option) {
    var items = (0, _values2.default)(option.items).map(function (item) {
      return item.category;
    });
    return [].concat((0, _toConsumableArray2.default)(acc), (0, _toConsumableArray2.default)(items));
  }, []).some(function (i) {
    return i === "personalItem";
  });
}