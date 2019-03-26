"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var toUser = function toUser(user) {
  var _user$identity, _user$identity2, _user$identity3, _user$identity4, _user$identity5, _user$identity6;

  return {
    type: "user",
    token: user.token || "",
    user: {
      id: ((_user$identity = user.identity) === null || _user$identity === void 0 ? void 0 : _user$identity.id) || "",
      email: ((_user$identity2 = user.identity) === null || _user$identity2 === void 0 ? void 0 : _user$identity2.email) || "",
      verified: ((_user$identity3 = user.identity) === null || _user$identity3 === void 0 ? void 0 : _user$identity3.emailVerified) || false,
      firstname: ((_user$identity4 = user.identity) === null || _user$identity4 === void 0 ? void 0 : _user$identity4.firstName) || "",
      lastname: ((_user$identity5 = user.identity) === null || _user$identity5 === void 0 ? void 0 : _user$identity5.lastName) || "",
      affiliateId: ((_user$identity6 = user.identity) === null || _user$identity6 === void 0 ? void 0 : _user$identity6.affiliateId) || ""
    }
  };
};

var _default = toUser;
exports.default = _default;