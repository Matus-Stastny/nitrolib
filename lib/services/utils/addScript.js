"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var addScript = function addScript(url) {
  if (typeof window === "undefined") return;
  var f = document.createElement("script");
  f.type = "text/javascript";
  f.async = true;
  f.src = url.replace(/^https?:/, "");
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(f);
};

var _default = addScript;
exports.default = _default;