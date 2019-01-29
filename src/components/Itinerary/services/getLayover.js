// @flow strict
import * as R from "ramda";
import differenceInDays from "date-fns/differenceInDays";
import differenceInMilliseconds from "date-fns/differenceInMilliseconds";
import startOfDay from "date-fns/startOfDay";

import type { Itinerary } from "../../../records/Itinerary";
import linkArrayItems from "./linkArrayItems";
import getTrips from "./getTrips";

const getUTCDate = (date = new Date()) =>
  new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

const getMidnight = date => startOfDay(getUTCDate(date));

// TODO: type it correctly
const getLayover = (itinerary: Itinerary) => {
  const trips = getTrips(itinerary);

  return R.pipe(
    linkArrayItems(false),
    R.drop(1),
    R.reduce((acc, { current, prev }) => {
      const prevArrival = prev[prev.length - 1].arrival;
      const currDeparture = current[0].departure;
      const prevArrivalMidnight = getMidnight(new Date(prevArrival.when.local));
      const currDepartureMidnight = getMidnight(new Date(currDeparture.when.local));
      const nightsInDestination = differenceInDays(currDepartureMidnight, prevArrivalMidnight);

      const newArr: Array<any> = acc.concat({
        duration: differenceInMilliseconds(
          new Date(currDeparture.when.utc),
          new Date(prevArrival.when.utc),
        ),
        nightsInDestination,
        place: prevArrival.where,
        switchToPlace:
          prevArrival.where.code !== currDeparture.where.code ? currDeparture.where : null,
      });

      return newArr;
    }, []),
  )(trips);
};

export default getLayover;

// TODO: implement this
// accommodationLink:
//   accommodationParams && nightsInDestination > 0
//     ? getAccommodationLink(
//         accommodationParams,
//         prevArrival,
//         currDeparture,
//         firstDeparture,
//         nightsInDestination,
//         trips.length,
//       )
//     : null,
