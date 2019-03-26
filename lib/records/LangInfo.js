"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixTimeFormat = exports.fixDateFormat = exports.langInfoDefault = void 0;

var _replace2 = _interopRequireDefault(require("ramda/src/replace"));

var _compose2 = _interopRequireDefault(require("ramda/src/compose"));

// eslint-disable-next-line import/prefer-default-export
var langInfoDefault = {
  id: "en",
  name: "English",
  displayName: "English",
  phone: "gb",
  email: "en",
  defaultCountry: "gb",
  api: "en",
  moment: "en-gb",
  jumio: "en_GB",
  nginx: "en",
  countriesTranslations: "EN",
  translations: "en",
  phraseApp: "en-GB",
  canonical: "",
  hreflang: "en-GB",
  iso: "en-GB",
  locations: "en",
  dateFormat: "ddd D MMM",
  dateFormatShort: "D/M",
  dateFormatLong: "DD.MM.YYYY",
  dateFormatPlain: "L",
  timeFormat: "LT",
  durationFormat: "H[h] mm[m]",
  durationFormatShort: "m[m] ss[s]",
  dimension: "__x__ cm",
  weight: "__x__ kg",
  latinInputs: false,
  currency: "gbp",
  direction: "ltr",
  flag: "gb",
  fontSubsets: "greek,latin-ext",
  firstNamePlaceholder: "Harry James",
  lastNamePlaceholder: "Brown",
  addressPlaceholder: "71 Wall Stt",
  cityPlaceholder: "New York",
  zipCodePlaceholder: "10005",
  idNumberPlaceholder: "1234567890",
  companyVatPlaceholder: "10007",
  companyNamePlaceholder: "Kiwi.com",
  distanceUnit: "__x__ km",
  distanceUnitConversionRate: "1",
  elevioLang: "",
  specialFont: "",
  decimalSeparator: ".",
  thousandsSeparator: ",",
  separateFourDigits: "1"
};
exports.langInfoDefault = langInfoDefault;
var fixDateFormat = (0, _compose2.default)((0, _replace2.default)(/\bYYYY\b/g, "yyyy"), (0, _replace2.default)(/\bMMMD\b/g, "MMMd"), // Japan special
(0, _replace2.default)(/\bD\b/g, "d"), (0, _replace2.default)(/\bDD\b/g, "dd"), (0, _replace2.default)(/\bddd\b/g, "eee"), (0, _replace2.default)(/\bdd\b/g, "eeeeee"));
exports.fixDateFormat = fixDateFormat;
var fixTimeFormat = (0, _replace2.default)(/\bLT\b/g, "HH:mm");
exports.fixTimeFormat = fixTimeFormat;