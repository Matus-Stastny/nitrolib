// @flow strict
import differenceInMilliseconds from "date-fns/differenceInMilliseconds";

import type { ItineraryPart } from "../../../records/Itinerary";

const getPartsDuration = (parts: Array<ItineraryPart>): number => {
  const firstPart = parts[0];
  const lastPart = parts[parts.length - 1];

  const departureTime = firstPart.departure.when.utc;
  const arrivalTime = lastPart.arrival.when.utc;

  return differenceInMilliseconds(new Date(arrivalTime), new Date(departureTime));
};

export default getPartsDuration;
