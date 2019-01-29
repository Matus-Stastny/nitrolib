// @flow strict
import isSameDay from "date-fns/isSameDay";

import type { ItineraryPart } from "../../../records/Itinerary";

const isLocalOverNightPart = (part: ItineraryPart): boolean =>
  !isSameDay(new Date(part.arrival.when.local), new Date(part.departure.when.local));

export default isLocalOverNightPart;
