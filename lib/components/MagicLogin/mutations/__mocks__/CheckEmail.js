"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var CheckEmail = jest.fn(function (email) {
  if (email === "error@example.com") {
    return Promise.reject(new Error("Network issue"));
  }

  var result = {
    hasKiwiAccount: false,
    hasFacebook: false,
    hasGoogle: false,
    hasBooking: false
  };

  if (["withBooking@example.com", "withBookingError@example.com"].includes(email)) {
    return Promise.resolve({
      checkEmail: {
        result: (0, _objectSpread2.default)({}, result, {
          hasBooking: true
        })
      }
    });
  }

  if (email === "withFacebook@example.com") {
    return Promise.resolve({
      checkEmail: {
        result: (0, _objectSpread2.default)({}, result, {
          hasFacebook: true,
          hasKiwiAccount: true,
          hasBooking: true
        })
      }
    });
  }

  return Promise.resolve({
    checkEmail: {
      result: result
    }
  });
});
var _default = CheckEmail;
exports.default = _default;