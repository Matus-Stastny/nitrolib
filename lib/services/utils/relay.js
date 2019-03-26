"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEnvironment = exports.makeCall = void 0;

var _relayRuntime = require("relay-runtime");

var makeFetchQuery = function makeFetchQuery(call) {
  return function (operation, variables) {
    return call({
      query: operation.text,
      variables: variables
    });
  };
};

var store = new _relayRuntime.Store(new _relayRuntime.RecordSource());

var makeCall = function makeCall(token) {
  var kwAuthToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return function (input) {
    return fetch("https://graphql.kiwi.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: token,
        "KW-Auth-Token": kwAuthToken,
        "X-Client": "nitro"
      },
      body: JSON.stringify(input)
    }).then(function (res) {
      return res.json();
    });
  };
};

exports.makeCall = makeCall;

var makeEnvironment = function makeEnvironment(call) {
  return new _relayRuntime.Environment({
    network: _relayRuntime.Network.create(makeFetchQuery(call)),
    store: store
  });
};

exports.makeEnvironment = makeEnvironment;