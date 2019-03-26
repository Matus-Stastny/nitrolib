"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLink;

// cars.kiwi.com are powered by rentalcars.com
var getCarsLanguage = function getCarsLanguage(isoShort) {
  return isoShort === "el" ? "gr" : isoShort;
}; // "fix" greek language code


function getLink(language) {
  return "https://cars.kiwi.com/?preflang=".concat(getCarsLanguage(language.iso.substring(0, 2)), "&adplat=headerlinks");
}