"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLink;

// holidays.kiwi.com are powered by Logitravel
var getLogitravelDeeplink = function getLogitravelDeeplink(isoShort) {
  var supportedLanguages = ["pt", "es", "it"];
  var logitravelDeeplinkLang = supportedLanguages.indexOf(isoShort) > -1 ? isoShort : "gb";
  return "//holidays.kiwi.com/".concat(logitravelDeeplinkLang, "/?utm_id=24897");
}; // formatting of the


var getLastminuteDeeplink = function getLastminuteDeeplink(lang) {
  var utmSource = "?acntb=DP&bf_subsource=-----TL0S10RR01&utm_medium=whitelabel&utm_source=kiwi";

  switch (lang) {
    case "ie":
      return "https://kiwicom-ie.lastminute.com/flight-hotel/".concat(utmSource);

    case "es":
      return "https://kiwicom-es.lastminute.com/vuelo-hotel/".concat(utmSource);

    case "fr":
      return "https://kiwicom-fr.lastminute.com/vol-hotel/".concat(utmSource);

    case "it":
      return "https://kiwicom-it.lastminute.com/volo-hotel/".concat(utmSource);

    case "de":
      return "https://kiwicom.lastminute.de/flug-hotel/".concat(utmSource);

    case "en":
    default:
      return "https://kiwicom.lastminute.com/flight-hotel/".concat(utmSource);
  }
}; // Supported currenceis on Logitravel


var HOLIDAYS_CURRENCIES = ["eur", "gbp"];
var PACKAGES = {
  none: {
    getLink: function getLink(lang) {
      return lang;
    }
  },
  holidays: {
    getLink: function getLink(lang) {
      return getLogitravelDeeplink(lang);
    }
  },
  lastminute: {
    getLink: function getLink(lang) {
      return getLastminuteDeeplink(lang);
    }
  }
};

function getLink(provider, lastminuteSupported, language, currency) {
  var packageProviderSet = provider !== "none"; // Intersection of Logitravel & Lastminute
  // Let AB test decide (packageProvider)

  var showPackagesIntersection = packageProviderSet && HOLIDAYS_CURRENCIES.includes(currency.id);
  var packages = showPackagesIntersection && PACKAGES[provider]; // Lastminute extra

  var packagesLastMinute = !showPackagesIntersection && lastminuteSupported && PACKAGES.lastminute;

  if (packages) {
    var lang = provider === "holidays" ? language.iso.substring(0, 2) : language.id;
    return PACKAGES[provider].getLink(lang);
  }

  if (packagesLastMinute) {
    return PACKAGES.lastminute.getLink(language.id);
  }

  return "";
}