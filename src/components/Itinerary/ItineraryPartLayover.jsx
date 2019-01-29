// @flow strict
import * as React from "react";
import List from "@kiwicom/orbit-components/lib/List";
import ListItem from "@kiwicom/orbit-components/lib/List/ListItem";
import TripLayover from "@kiwicom/orbit-components/lib/TripSector/TripLayover";
import ClockIcon from "@kiwicom/orbit-components/lib/icons/Clock";
import FlightReturnIcon from "@kiwicom/orbit-components/lib/icons/FlightReturn";
import CheckIcon from "@kiwicom/orbit-components/lib/icons/Check";

import type { ItineraryLayover } from "../../records/Itinerary";
import Time from "../Time";
import TranslateNode from "../TranslateNode";
import Translate from "../Translate";

type Props = {
  part: ItineraryLayover,
};

const ItineraryPartLayover = ({ part }: Props) => {
  const { hasGuarantee, bagsRecheckRequired, differentAirport } = part;

  return (
    <TripLayover>
      <List type="secondary" size="small">
        <ListItem icon={<ClockIcon />}>
          <TranslateNode
            t="booking.global.layover"
            values={{
              time: <Time time={new Date(part.duration)} />,
            }}
          />
        </ListItem>
        {bagsRecheckRequired && (
          <ListItem icon={<ClockIcon />}>
            <Translate t="booking.baggage.recheck_baggage_content_short" />
          </ListItem>
        )}
        {hasGuarantee && (
          <ListItem icon={<CheckIcon />}>
            <Translate t="booking.global.guarantee.company_covered" />
          </ListItem>
        )}
        {!(hasGuarantee || differentAirport) && (
          <ListItem icon={<CheckIcon />}>
            <Translate t="booking.global.guarantee.airline_covered" />
          </ListItem>
        )}
        {differentAirport && (
          <ListItem icon={<FlightReturnIcon />}>
            <Translate t="booking.global.guarantee.airport_change" />
          </ListItem>
        )}
      </List>
    </TripLayover>
  );
};

export default ItineraryPartLayover;
