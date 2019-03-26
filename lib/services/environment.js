"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _relay = require("./utils/relay");

var call = function call(input) {
  return fetch("https://graphql.kiwi.com", {
    method: "POST",
    headers: {
      // Add authentication and other headers here
      "Content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(input)
  }).then(function (res) {
    return res.json();
  });
};

var _default = (0, _relay.makeEnvironment)(call);

exports.default = _default;