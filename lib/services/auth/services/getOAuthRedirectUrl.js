"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOAuthRedirectUrl;

function getOAuthRedirectUrl(url) {
  var safeUrl = url // Because oauth redirect is done on server we need get rid of hash
  .split("#")[0] // Remove tracking parameters
  .replace(/((utm_[a-z]+)|(session_[a-z]+))=[^&]*(&|$)/g, "") // Remove trailing delimiters
  .replace(/(&|\?)+$/, "") // Escape special characters
  .replace(/,/g, "%2C").replace(/~/g, "%7E");
  return "".concat(safeUrl).concat(safeUrl.includes("?") ? "&" : "?", "oauth-login=true");
}