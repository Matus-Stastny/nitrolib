"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlers = require("../../../services/fetch/handlers");

var _headers = require("../../../services/fetch/headers");

var getNavBarLinks = function getNavBarLinks(_ref) {
  var languageId = _ref.languageId,
      currencyId = _ref.currencyId,
      searchForm = _ref.searchForm,
      splitster = _ref.splitster;
  return fetch("https://ancillaries-integration.skypicker.com/navbar", {
    method: "POST",
    headers: _headers.JSON_BOTH,
    body: JSON.stringify({
      language: {
        id: languageId
      },
      currency: {
        id: currencyId
      },
      searchForm: searchForm,
      splitster: splitster
    })
  }).then(_handlers.handleJSON);
};

var _default = getNavBarLinks;
exports.default = _default;