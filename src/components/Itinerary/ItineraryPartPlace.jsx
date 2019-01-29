// @flow strict
import * as React from "react";
import styled from "styled-components";

import type { ItineraryPlace, DifferentAirport } from "../../records/Itinerary";
import TranslateTooltip from "./TranslateTooltips";
import { ItineraryContext } from "./ItineraryContext";

type Props = {|
  differentAirport?: DifferentAirport,
  place: ItineraryPlace,
  isReturnTrip: boolean,
  id: string,
|};

const Highlighter = styled.span`
  text-decoration: ${({ isHighlighted }) => (isHighlighted ? "underline" : "none")};
`;

const ItineraryPartPlace = ({ id, place, differentAirport, isReturnTrip }: Props) => {
  const { code } = place;
  const { arrival, highlightId, onSetHighlight } = React.useContext(ItineraryContext);

  return (
    <>
      {place.name}{" "}
      <Highlighter isHighlighted={id === highlightId && arrival === place.code}>
        {differentAirport ? (
          <TranslateTooltip
            differentAirport={differentAirport}
            code={code}
            isReturnTrip={isReturnTrip}
            highlight={onSetHighlight}
          />
        ) : (
          place.code
        )}
      </Highlighter>
    </>
  );
};

export default ItineraryPartPlace;
