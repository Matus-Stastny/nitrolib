// @flow strict
import * as React from "react";
import * as R from "ramda";
import TripSector from "@kiwicom/orbit-components/lib/TripSector";

import insertLayoversParts from "./services/insertLayoversParts";
import ItineraryPart from "./ItineraryPart";
import ItineraryPartLayover from "./ItineraryPartLayover";
import type { Itinerary } from "../../records/Itinerary";
import ItineraryTripTitle from "./ItineraryTripTitle";
import ItineraryTripLayover from "./ItineraryTripLayover";
import ItineraryProvider from "./ItineraryContext";
import determineShowDate from "./services/determineShowDate";
import getTrips from "./services/getTrips";
import getLayovers from "./services/getLayover";
import getFlightsDifferentAirports from "./services/getFlightsDifferentAiports";

type Props = {|
  itinerary: Itinerary,
|};

const ItineraryNew = ({ itinerary }: Props): React.Node[] | null => {
  const trips = getTrips(itinerary);
  const layovers = getLayovers(itinerary);
  const differentAirportFlights = getFlightsDifferentAirports(itinerary);

  return trips.map((trip, tripIndex) => {
    const parts = R.pipe(
      determineShowDate,
      insertLayoversParts,
    )(trip);

    return (
      <ItineraryProvider>
        <ItineraryTripTitle trip={trip} />
        <TripSector>
          {parts.map(part => {
            console.log(part);
            switch (part.type) {
              case "flight":
                return (
                  <ItineraryPart
                    part={part}
                    isReturnTrip={itinerary.isReturn}
                    showDate={part.showDate}
                    isLocalOvernight={part.isLocalOvernight}
                    differentAirport={R.find(R.propEq("id", part.id), differentAirportFlights)}
                  />
                );

              case "layover":
                return <ItineraryPartLayover part={part} />;

              default:
                return null;
            }
          })}
        </TripSector>
        <ItineraryTripLayover layover={layovers[tripIndex]} />
      </ItineraryProvider>
    );
  });
};

export default ItineraryNew;
