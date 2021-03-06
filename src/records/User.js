// @flow strict
export type User = {|
  id: string,
  email: string,
  verified: boolean,
  firstname: string,
  lastname: string,
  // apiToken: string,
  // affiliateId: string,
  // cardDiscount: number,
  // balanceDiscount: number,
  // balances: Array<{ amount: number, currency: string }>, ???
|};

export const userDefault: ?User = null;

export type MapUserInput = {|
  user_id: string,
  email: string,
  email_verified: boolean,
  first_name: string,
  last_name: string,
|};

export const mapUser = (input: MapUserInput): User => ({
  id: input.user_id,
  email: input.email,
  verified: Boolean(input.email_verified),
  firstname: input.first_name,
  lastname: input.last_name,
  // apiToken: input.search_token,
  // affiliateId: input.affiliate_id,
  // cardDiscount: input.card_payment_discount,
  // balanceDiscount: input.credits_payment_discount,
  // balances: input.accounts
  //   .map(balance => ({
  //     amount: balance.user_credits,
  //     currency: balance.currency.toLowerCase(),
  //   }))
  //   .filter(balance => Boolean(currencies[balance.currency])),
});
