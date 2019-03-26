"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRelay = require("react-relay");

var _environment = _interopRequireDefault(require("../../../services/environment"));

var resetPassword = function resetPassword() {
  var node = require("./__generated__/ResetPasswordMutation.graphql");

  if (node.hash && node.hash !== "afd7127f94b1911a4ebf474b5afaecf1") {
    console.error("The definition of 'ResetPasswordMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("./__generated__/ResetPasswordMutation.graphql");
};

var ResetPassword = function ResetPassword(email, brand) {
  return new Promise(function (resolve, reject) {
    var variables = {
      email: email,
      brand: brand
    };
    (0, _reactRelay.commitMutation)(_environment.default, {
      mutation: resetPassword,
      // $FlowExpected: Broken definition
      variables: variables,
      onCompleted: resolve,
      onError: reject
    });
  });
};

var _default = ResetPassword;
exports.default = _default;