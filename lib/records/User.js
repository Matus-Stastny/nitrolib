"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUser = exports.userDefault = void 0;
var userDefault = null;
exports.userDefault = userDefault;

var mapUser = function mapUser(input) {
  return {
    id: input.user_id,
    email: input.email,
    verified: Boolean(input.email_verified),
    firstname: input.first_name,
    lastname: input.last_name // apiToken: input.search_token,
    // affiliateId: input.affiliate_id,
    // cardDiscount: input.card_payment_discount,
    // balanceDiscount: input.credits_payment_discount,
    // balances: input.accounts
    //   .map(balance => ({
    //     amount: balance.user_credits,
    //     currency: balance.currency.toLowerCase(),
    //   }))
    //   .filter(balance => Boolean(currencies[balance.currency])),

  };
};

exports.mapUser = mapUser;