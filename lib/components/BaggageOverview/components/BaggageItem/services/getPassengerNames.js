"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getPassengerNames = function getPassengerNames(passengersArr) {
  return passengersArr.map(function (p) {
    return "".concat(p.firstName[0], ". ").concat(p.middleName ? "".concat(p.middleName[0], ". ") : "").concat(p.lastName);
  }).join(", ");
};

var _default = getPassengerNames;
exports.default = _default;