// @flow strict
import * as R from "ramda";
import isSameDay from "date-fns/isSameDay";

import linkArrayItems from "./linkArrayItems";
import type { ItineraryPart } from "../../../records/Itinerary";
import isLocalOverNightPart from "./isLocalOverNightPart";

const determineShowDate: (trip: Array<ItineraryPart>) => Array<ItineraryPart> = R.pipe(
  linkArrayItems(false),
  R.map(({ prev, current }) => ({
    ...current,
    showDate:
      !prev ||
      !isSameDay(new Date(prev.arrival.when.local), new Date(current.departure.when.local)) ||
      isLocalOverNightPart(current),
    isLocalOvernight: isLocalOverNightPart(current),
  })),
);

export default determineShowDate;
