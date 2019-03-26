"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getGeoCountry = function getGeoCountry(ip) {
  return fetch("https://geoip-api-prod.skypicker.com/geoip-api".concat(ip && "?ip=".concat(ip))).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data.isoCountryCode.toLowerCase();
  }).catch(function () {
    return "gb";
  });
}; // Safe fallback


var _default = getGeoCountry;
exports.default = _default;