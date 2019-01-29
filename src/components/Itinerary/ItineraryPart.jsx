// @flow strict
import * as React from "react";
import TripDate from "@kiwicom/orbit-components/lib/TripSector/TripDate";
import TripSegment from "@kiwicom/orbit-components/lib/TripSegment";
import List from "@kiwicom/orbit-components/lib/List";
import ListItem from "@kiwicom/orbit-components/lib/List/ListItem";
import CarrierLogo from "@kiwicom/orbit-components/lib/CarrierLogo";
import InformationCircleIcon from "@kiwicom/orbit-components/lib/icons/InformationCircle";

import type { ItineraryFlight, DifferentAirport } from "../../records/Itinerary";
import getPartDuration from "./services/getPartDuration";
import Time from "../Time";
import Day from "../Day";
import Translate from "../Translate";
import ItineraryPartPlace from "./ItineraryPartPlace";

const CARRIER_TYPES = {
  flight: {
    typeKey: __("common.airline"),
    numberKey: __("common.flight_number"),
    pnrKey: __("common.pnr"),
  },
  train: {
    typeKey: __("common.carrier_colon"),
    numberKey: __("common.train_number"),
    pnrKey: __("common.pnr"),
  },
  bus: {
    typeKey: __("common.carrier_colon"),
    numberKey: __("common.bus_number"),
    pnrKey: __("common.pnr"),
  },
};

type Props = {
  part: ItineraryFlight,
  isReturnTrip: boolean,
  showDate: boolean,
  isLocalOvernight: boolean,
  differentAirport: DifferentAirport,
};

const ItineraryPartComponent = ({
  part,
  showDate,
  isLocalOvernight,
  differentAirport,
  isReturnTrip,
}: Props) => {
  const { id, departure, arrival, airline, type, number } = part;
  // const duration = getPartDuration(part);
  return (
    <>
      {showDate && (
        <TripDate>
          <Day date={new Date(departure.when.local)} />
          {isLocalOvernight && (
            <>
              {" — "}
              <Day date={new Date(arrival.when.local)} />
            </>
          )}
        </TripDate>
      )}

      <TripSegment
        carrier={{ code: airline.code, type: "airline", name: airline.name }}
        duration="3"
        departure={
          <ItineraryPartPlace
            isReturnTrip={isReturnTrip}
            id={id}
            place={departure.where}
            differentAirport={differentAirport}
          />
        }
        departureTime={<Time time={new Date(departure.when.local)} />}
        arrival={<ItineraryPartPlace id={id} place={arrival.where} isReturnTrip={isReturnTrip} />}
        arrivalTime={<Time time={new Date(arrival.when.local)} />}
      >
        <List size="small" type="secondary">
          <ListItem icon={<CarrierLogo carriers={[{ code: airline.code, name: airline.name }]} />}>
            <Translate t={CARRIER_TYPES[type].typeKey} /> {airline.name}
          </ListItem>
          <ListItem icon={<InformationCircleIcon />}>
            <Translate t={CARRIER_TYPES[type].numberKey} values={{ number }} />
          </ListItem>
        </List>
      </TripSegment>
    </>
  );
};

export default ItineraryPartComponent;
