// @flow strict
import querystring from "querystring";
import format from "date-fns/format";

import config from "client/consts/config";

type Input = {
  bid: string,
  email: string,
  iata: string,
  departure: Date,
};

// eslint-disable-next-line import/prefer-default-export
export function getToken({ bid, email, iata, departure }: Input, call: typeof fetch = fetch) {
  const query = {
    email,
    src: iata,
    dtime: format(departure, config.apiDateFormat),
  };

  return call(
    `${config.bookingApiUrl}/api/v0.1/users/get_simple_token/${bid}?${querystring.stringify(
      query,
    )}`,
  ).then((res: Response) => {
    if (!res.ok) {
      return res.json().then(body => Promise.reject(body.msg));
    }

    return res.json().then(body => body.simple_token);
  });
}