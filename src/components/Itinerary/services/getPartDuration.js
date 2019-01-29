// @flow strict
import differenceInMilliseconds from "date-fns/differenceInMilliseconds";

import type { ItineraryPart } from "../../../records/Itinerary";

const getPartDuration = (part: ItineraryPart) =>
  differenceInMilliseconds(new Date(part.arrival.when.utc), new Date(part.departure.when.utc));

export default getPartDuration;
