"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRelay = require("react-relay");

var _environment = _interopRequireDefault(require("../../../services/environment"));

var createAccount = function createAccount() {
  var node = require("./__generated__/CreateAccountMutation.graphql");

  if (node.hash && node.hash !== "24cc5bc4bed6f571116030a88ca9198d") {
    console.error("The definition of 'CreateAccountMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("./__generated__/CreateAccountMutation.graphql");
};

var CreateAccount = function CreateAccount(brand, credentials) {
  return new Promise(function (resolve, reject) {
    var variables = {
      brand: brand,
      credentials: credentials
    };
    (0, _reactRelay.commitMutation)(_environment.default, {
      mutation: createAccount,
      // $FlowExpected: Broken definition
      variables: variables,
      onCompleted: resolve,
      onError: reject
    });
  });
};

var _default = CreateAccount;
exports.default = _default;