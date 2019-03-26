"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var CreateAccount = jest.fn(function (brand, credentials) {
  if (credentials.email === "error@example.com") {
    return Promise.resolve({
      createAccount: {
        success: false,
        error: "INVALID_EMAIL"
      }
    });
  }

  return Promise.resolve({
    createAccount: {
      success: true,
      error: null
    }
  });
});
var _default = CreateAccount;
exports.default = _default;