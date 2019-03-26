"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatten = exports.itineraryNomad = exports.itineraryMulticity = exports.itineraryReturn = exports.itineraryOneWay = void 0;

var _normalizr = require("normalizr");

var _Sector = require("./Sector");

var itineraryOneWay = {
  sector: _Sector.sector
};
exports.itineraryOneWay = itineraryOneWay;
var itineraryReturn = {
  outbound: _Sector.sector,
  inbound: _Sector.sector
};
exports.itineraryReturn = itineraryReturn;
var itineraryMulticity = {
  sectors: [_Sector.sector]
};
exports.itineraryMulticity = itineraryMulticity;
var itineraryNomad = {
  sectors: [_Sector.sector]
};
exports.itineraryNomad = itineraryNomad;

var flatten = function flatten(data) {
  if (data.type === "oneWay") {
    return (0, _normalizr.normalize)(data, itineraryOneWay);
  }

  if (data.type === "return") {
    return (0, _normalizr.normalize)(data, itineraryReturn);
  }

  if (data.type === "multicity") {
    return (0, _normalizr.normalize)(data, itineraryMulticity);
  }

  return (0, _normalizr.normalize)(data, itineraryNomad);
};

exports.flatten = flatten;