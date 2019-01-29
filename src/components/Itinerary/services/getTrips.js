// @flow strict
import * as R from "ramda";

import type { Itinerary, ItineraryPart } from "../../../records/Itinerary";

const getTrips: (itinerary: Itinerary) => Array<Array<ItineraryPart>> = R.compose(
  R.values,
  R.groupBy(R.prop("tripIndex")),
  R.prop("parts"),
);

export default getTrips;
