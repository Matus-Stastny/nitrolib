"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRelay = require("react-relay");

var _environment = _interopRequireDefault(require("../../../services/environment"));

var checkEmail = function checkEmail() {
  var node = require("./__generated__/CheckEmailMutation.graphql");

  if (node.hash && node.hash !== "d73afcbffece54a1d2a5c6b2b6371817") {
    console.error("The definition of 'CheckEmailMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("./__generated__/CheckEmailMutation.graphql");
};

var _default = function _default(email, brand) {
  return new Promise(function (resolve, reject) {
    var variables = {
      email: email,
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

exports.default = _default;