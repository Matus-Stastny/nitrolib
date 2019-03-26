"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var SignIn = jest.fn(function () {
  return Promise.resolve({
    signIn: {
      success: true,
      user: {
        token: "",
        identity: {
          id: "",
          email: "",
          firstName: "",
          lastName: "",
          emailVerified: false
        }
      }
    }
  });
});
var _default = SignIn;
exports.default = _default;