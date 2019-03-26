"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var ResetPassword = jest.fn(function () {
  return Promise.resolve({
    resetPassword: {
      success: true
    }
  });
});
var _default = ResetPassword;
exports.default = _default;