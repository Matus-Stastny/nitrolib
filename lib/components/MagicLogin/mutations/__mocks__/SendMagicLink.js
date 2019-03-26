"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var SendMagicLink = jest.fn(function (email) {
  if (email === "withBookingError@example.com") {
    return Promise.reject(Error("Some wild error."));
  }

  return Promise.resolve({
    sendMagicLink: {
      success: true
    }
  });
});
var _default = SendMagicLink;
exports.default = _default;