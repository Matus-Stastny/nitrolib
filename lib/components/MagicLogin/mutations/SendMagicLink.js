"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRelay = require("react-relay");

var _environment = _interopRequireDefault(require("../../../services/environment"));

var sendMagicLink = function sendMagicLink() {
  var node = require("./__generated__/SendMagicLinkMutation.graphql");

  if (node.hash && node.hash !== "c1e6dd92f852be1a64e6d7b5c4249b91") {
    console.error("The definition of 'SendMagicLinkMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("./__generated__/SendMagicLinkMutation.graphql");
};

var SendMagicLink = function SendMagicLink(email, brand) {
  return new Promise(function (resolve, reject) {
    var variables = {
      email: email,
      brand: brand
    };
    (0, _reactRelay.commitMutation)(_environment.default, {
      mutation: sendMagicLink,
      // $FlowExpected: Broken definition
      variables: variables,
      onCompleted: resolve,
      onError: reject
    });
  });
};

var _default = SendMagicLink;
exports.default = _default;