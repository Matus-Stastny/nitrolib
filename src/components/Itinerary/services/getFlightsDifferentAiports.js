// @flow strict
import * as R from "ramda";

import type { Itinerary, DifferentAirport } from "../../../records/Itinerary";
import linkArrayItems from "./linkArrayItems";

const getFlightsDifferentAirports = (itinerary: Itinerary) => {
  const { parts } = itinerary;

  return R.pipe(
    R.filter(R.propEq("type", "flight")),
    linkArrayItems(false),

    R.reduce((acc, { next, current }) => {
      if (!next) {
        return acc;
      }

      const departure = next.departure.where.code;
      const arrival = current.arrival.where.code;

      if (departure !== arrival) {
        const newArr: Array<DifferentAirport> = acc.concat({
          arrival,
          departure,
          id: next.id,
          highlightId: current.id,
        });

        return newArr;
      }

      return acc;
    }, []),
  )(parts);
};

export default getFlightsDifferentAirports;
