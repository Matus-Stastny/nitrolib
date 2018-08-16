// @flow strict
import * as R from "ramda";

export type Currency = {|
  id: string,
  name: string,
  format: string,
  uncertainFormat: boolean,
  round: string, // number string
  enabledOnAffilId: string | string[],
  fallback: string,
  rate: number,
|};

export type Currencies = {
  [key: string]: Currency,
};

export const getCode = (code: string) => code.toUpperCase();
export const getSymbol = (format: string) => format.replace("__price__", "").trim();
export const format = (currency: Currency, price: number) =>
  currency.format.replace("__price__", String(price * currency.rate));

export const getAvailableList: Currencies => Currency[] = R.compose(
  R.sortBy(R.prop("id")),
  R.values,
);

export const currencyDefault: Currency = {
  id: "eur",
  name: "Euro",
  format: "__price__ €",
  uncertainFormat: false,
  round: "2",
  enabledOnAffilId: "",
  fallback: "",
  rate: 1,
};

export const MOST_USED_CURRENCIES = ["usd", "eur", "gbp", "aud", "sek", "dkk"];
