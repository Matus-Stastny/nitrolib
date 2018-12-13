// @flow

import { handleJSON } from "../../../services/fetch/handlers";
import setSplitsterCookies from "./splitsterCookies";

// Types
type GetNavBarLinks = {
  searchString: string,
  language: { id: string },
  currency: { id: string },
  searchForm: any,
  splitster: {},
};

export default function getNavBarLinks({
  searchString,
  language,
  currency,
  searchForm,
  splitster,
}: GetNavBarLinks) {
  return fetch("http://localhost:3000/navbar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      searchString,
      language,
      currency,
      searchForm,
      splitster,
    }),
  })
    .then(handleJSON)
    .then(setSplitsterCookies);
}
