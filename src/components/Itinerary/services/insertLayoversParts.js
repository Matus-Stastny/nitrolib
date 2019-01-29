// @flow strict
import * as R from "ramda";
import differenceInMilliseconds from "date-fns/differenceInMilliseconds";

import linkArrayItems from "./linkArrayItems";
import type { ItineraryFlight, ItineraryPart } from "../../../records/Itinerary";

const insertLayoverParts = (parts: Array<ItineraryPart>): Array<ItineraryFlight> =>
  R.pipe(
    linkArrayItems(false),
    R.reduce((acc, { prev, current }) => {
      if (R.isNil(prev)) {
        const newArr: Array<ItineraryFlight> = acc.concat(current);
        return newArr;
      }

      const currentDeparture = current.departure;
      const prevArrival = prev.arrival;

      const isDifferentAirport = currentDeparture.where.code !== prevArrival.where.code;

      const previousStopArrival = R.pathOr(
        prevArrival.when.utc,
        ["status", "changedTime", "arrival", "when", "utc"],
        prev,
      );

      const currentStopDeparture = R.pathOr(
        currentDeparture.when.utc,
        ["status", "changedTime", "departure", "when", "utc"],
        current,
      );

      const duration = differenceInMilliseconds(
        new Date(currentStopDeparture),
        new Date(previousStopArrival),
      );
      // TODO: fix type
      const newArr: Array<any> = acc.concat(
        {
          type: "layover",
          id: currentDeparture.where.id,
          name: currentDeparture.where.name,
          country: currentDeparture.where.country,
          code: currentDeparture.where.code,
          duration,
          bagsRecheckRequired: current.bagsRecheckRequired,
          hasGuarantee: current.guarantee,
          differentAirport: isDifferentAirport
            ? {
                arrival: prevArrival.where.code,
                departure: currentDeparture.where.code,
              }
            : null,
          isLayoverBetweenFlights: false, // FIXME
        },
        current,
      );

      return newArr;
    }, []),
  )(parts);

export default insertLayoverParts;
