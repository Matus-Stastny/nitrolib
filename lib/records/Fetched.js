"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchedDefault = void 0;

var _Airline = require("./Airline");

var _Country = require("./Country");

var _Continents = require("./Continents");

var _BrandLanguage = require("./BrandLanguage");

// eslint-disable-next-line import/prefer-default-export
var fetchedDefault = {
  airlines: {
    xx: _Airline.airlineDefault
  },
  countries: {
    en: _Country.countryDefault
  },
  continents: _Continents.continentsDefault,
  brandLanguage: _BrandLanguage.brandLanguageDefault
};
exports.fetchedDefault = fetchedDefault;