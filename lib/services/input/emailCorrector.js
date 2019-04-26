"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mailcheck = _interopRequireDefault(require("mailcheck"));

var _isEmail = _interopRequireDefault(require("validator/lib/isEmail"));

var DOMAINS = ["aim.com", "bk.ru", "centrum.cz", "email.cz", "gmail.com", "google.com", "googlemail.com", "inbox.ru", "libero.it", "list.ru", "me.com", "msn.com", "online.no", "qq.com", "qunar.com", "rambler.ru", "rocketmail.com", "seznam.cz", "skypicker.com", "t-online.de", "ukr.net", "web.de", "wego.com", "yandex.ru", "ymail.com"];
var SLD = ["hotmail", "live", "mail", "outlook", "yahoo"];
var TLD = ["ac.uk", "at", "be", "be.ch", "biz", "ca", "ch", "co.il", "co.jp", "co.nz", "co.uk", "com", "com.ar", "com.au", "com.br", "com.hk", "com.mx", "com.ph", "com.sg", "com.tw", "cz", "de", "dk", "edu", "es", "eu", "fr", "gov", "gov.uk", "gr", "hk", "hu", "ie", "in", "info", "it", "jp", "kr", "me.uk", "mil", "net", "net", "net.au", "net.uk", "nl", "no", "org", "ru", "se", "sg", "uk", "us", "pl"];

function emailCorrector(input) {
  if (!input) return "";

  var suggestion = _mailcheck.default.run({
    email: input,
    domains: DOMAINS,
    topLevelDomains: TLD,
    secondLevelDomains: SLD
  });

  return suggestion && (0, _isEmail.default)(suggestion.full) ? suggestion.full : "";
}

var _default = emailCorrector;
exports.default = _default;