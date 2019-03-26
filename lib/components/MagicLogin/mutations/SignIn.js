"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRelay = require("react-relay");

var _environment = _interopRequireDefault(require("../../../services/environment"));

var checkEmail = function checkEmail() {
  var node = require("./__generated__/SignInMutation.graphql");

  if (node.hash && node.hash !== "468dac6cfcd0566ff21f823acdc5ce9e") {
    console.error("The definition of 'SignInMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("./__generated__/SignInMutation.graphql");
};

var SignIn = function SignIn(email, password, brand) {
  return new Promise(function (resolve, reject) {
    var variables = {
      email: email,
      password: password,
      brand: brand
    };
    (0, _reactRelay.commitMutation)(_environment.default, {
      mutation: checkEmail,
      // $FlowExpected: Broken definition
      variables: variables,
      onCompleted: resolve,
      onError: reject
    });
  });
};

var _default = SignIn;
exports.default = _default;