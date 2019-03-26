"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLink;

var _isNil2 = _interopRequireDefault(require("ramda/src/isNil"));

var _complement2 = _interopRequireDefault(require("ramda/src/complement"));

var _pickBy2 = _interopRequireDefault(require("ramda/src/pickBy"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var _evolve2 = _interopRequireDefault(require("ramda/src/evolve"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _getDate = _interopRequireDefault(require("date-fns/getDate"));

var buildLink = function buildLink(baseUrl, params) {
  var urlParams = (0, _evolve2.default)({
    lang: function lang(input) {
      return "lang=".concat(input);
    },
    currency: function currency(input) {
      return "selected_currency=".concat(input.toUpperCase());
    },
    destination: function destination(input) {
      switch (input.type) {
        case "airport":
          return "iata=".concat(input.name);

        case "country":
          return input.name && "ss=".concat(input.name, "&si=co");

        case "region":
        case "continent":
          return null;

        default:
          return input.name && "ss=".concat(input.name);
      }
    },
    checkIn: function checkIn(input) {
      return "checkin_monthday=".concat((0, _getDate.default)(input), "&checkin_year_month=").concat((0, _format.default)(input, "yyyy-MM"));
    },
    checkOut: function checkOut(input) {
      return "checkout_monthday=".concat((0, _getDate.default)(input), "&checkout_year_month=").concat((0, _format.default)(input, "yyyy-MM"));
    },
    adults: function adults(input) {
      return "group_adults=".concat(input);
    },
    children: function children(input) {
      return "group_children=".concat(input);
    }
  }, params);
  var query = (0, _values2.default)(urlParams).filter(Boolean).join("&");
  return {
    base: baseUrl,
    query: "".concat(urlParams.destination ? "searchresults" : "index", ".html").concat(query && "".concat(baseUrl.includes("?") ? "&" : "?").concat(query))
  };
};

var PROVIDERS = {
  booking: function booking(params) {
    return buildLink("BOOKING", (0, _objectSpread2.default)({}, params, {
      aid: "aid=1549681"
    }));
  },
  roomsKiwi: function roomsKiwi(params) {
    return buildLink("ROOMS_KIWI", (0, _objectSpread2.default)({}, params, {
      label: "headerlinks"
    }));
  },
  roomsKiwiCode: function roomsKiwiCode(params) {
    return buildLink("ROOMS_KIWI_CODE", (0, _objectSpread2.default)({}, params, {
      aid: "aid=1549200",
      label: "headerlinks"
    }));
  }
};
var ENABLED_SEARCH_MODES = ["oneWay", "return"];

function getLink(provider, language, currencyObj, form) {
  var urlGetter = PROVIDERS[provider];

  if (!urlGetter) {
    return "";
  }

  var searchParams = form && ENABLED_SEARCH_MODES.includes(form.mode) ? {
    destination: form.destination,
    checkIn: form.checkIn,
    checkOut: form.checkOut,
    adults: form.adults,
    children: form.children
  } : null;
  var lang = language.id;
  var currency = currencyObj.id;
  return urlGetter((0, _pickBy2.default)((0, _complement2.default)(_isNil2.default), (0, _objectSpread2.default)({
    lang: lang,
    currency: currency
  }, searchParams)));
}