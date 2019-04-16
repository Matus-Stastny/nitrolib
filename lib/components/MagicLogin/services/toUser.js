"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var toUser = function toUser(user) {
  var _user$identity, _user$identity2, _user$identity3, _user$identity4, _user$identity5, _user$bookingIdentity, _user$bookingIdentity2, _user$bookingIdentity3, _user$bookingIdentity4, _user$bookingIdentity5, _user$bookingIdentity6;

  return {
    type: "user",
    token: user.token || "",
    user: {
      id: ((_user$identity = user.identity) === null || _user$identity === void 0 ? void 0 : _user$identity.id) || "",
      email: ((_user$identity2 = user.identity) === null || _user$identity2 === void 0 ? void 0 : _user$identity2.email) || "",
      verified: ((_user$identity3 = user.identity) === null || _user$identity3 === void 0 ? void 0 : _user$identity3.emailVerified) || false,
      firstname: ((_user$identity4 = user.identity) === null || _user$identity4 === void 0 ? void 0 : _user$identity4.firstName) || "",
      lastname: ((_user$identity5 = user.identity) === null || _user$identity5 === void 0 ? void 0 : _user$identity5.lastName) || "",
      affiliateId: ((_user$bookingIdentity = user.bookingIdentity) === null || _user$bookingIdentity === void 0 ? void 0 : _user$bookingIdentity.affiliateId) || "",
      cardDiscount: ((_user$bookingIdentity2 = user.bookingIdentity) === null || _user$bookingIdentity2 === void 0 ? void 0 : (_user$bookingIdentity3 = _user$bookingIdentity2.discounts) === null || _user$bookingIdentity3 === void 0 ? void 0 : _user$bookingIdentity3.card) || 0,
      balanceDiscount: ((_user$bookingIdentity4 = user.bookingIdentity) === null || _user$bookingIdentity4 === void 0 ? void 0 : (_user$bookingIdentity5 = _user$bookingIdentity4.discounts) === null || _user$bookingIdentity5 === void 0 ? void 0 : _user$bookingIdentity5.credits) || 0,
      balances: (((_user$bookingIdentity6 = user.bookingIdentity) === null || _user$bookingIdentity6 === void 0 ? void 0 : _user$bookingIdentity6.balances) || []).filter(Boolean).map(function (balance) {
        return {
          amount: balance.amount || "0",
          currency: balance.currencyId || "EUR"
        };
      })
    }
  };
};

var _default = toUser;
exports.default = _default;