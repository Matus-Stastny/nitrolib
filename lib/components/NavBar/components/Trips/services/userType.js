"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var userName = function userName(auth) {
  switch (auth.type) {
    case "user":
      return "".concat(auth.user.firstname, " ").concat(auth.user.lastname);

    case "magic":
      return auth.email;

    case "token":
      return "";

    default:
      return auth.email;
  }
};

var _default = userName;
exports.default = _default;