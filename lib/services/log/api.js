"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _headers = require("../fetch/headers");

var _handlers = require("../fetch/handlers");

function log(payload) {
  fetch("https://loglady.skypicker.com/api-docs/track", {
    method: "POST",
    headers: _headers.JSON_BOTH,
    body: JSON.stringify(payload)
  }).then(_handlers.handleError);
}

var _default = log;
exports.default = _default;