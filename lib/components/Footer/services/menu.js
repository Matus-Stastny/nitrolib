"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinks = void 0;

// eslint-disable-next-line import/prefer-default-export
var getLinks = function getLinks(lang) {
  return [{
    id: 1,
    title: "menu.terms_and_conditions",
    url: "https://www.kiwi.com/".concat(lang, "/pages/content/legal/")
  }, {
    id: 2,
    title: "menu.terms_of_use",
    url: "https://www.kiwi.com/".concat(lang, "/pages/content/terms/")
  }, {
    id: 3,
    title: "menu.privacy_policy",
    url: "https://www.kiwi.com/".concat(lang, "/content/privacy/")
  }, {
    id: 4,
    title: "menu.security",
    url: "https://www.kiwi.com/".concat(lang, "/pages/security/")
  }];
};

exports.getLinks = getLinks;