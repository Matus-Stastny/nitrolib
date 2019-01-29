// @flow strict
import * as R from "ramda";

import determineShowDate from "./determineShowDate";
import insertLayoversParts from "./insertLayoversParts";
import type { ItineraryPart, ItineraryFlight } from "../../../records/Itinerary";

const getParts: (trip: Array<ItineraryPart>) => Array<ItineraryFlight> = R.pipe(
  determineShowDate,
  insertLayoversParts,
);

export default getParts;
