"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPassengersFromId;

var _innerJoin2 = _interopRequireDefault(require("ramda/src/innerJoin"));

function getPassengersFromId(paxIds, passengersArray) {
  return (0, _innerJoin2.default)(function (passenger, paxId) {
    return passenger.paxId === paxId;
  }, passengersArray, paxIds).map(function (p) {
    return {
      paxId: p.paxId,
      firstName: p.firstName,
      middleName: p.middleName,
      lastName: p.lastName
    };
  });
}