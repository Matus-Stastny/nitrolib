// @flow strict
import * as React from "react";

import type { DifferentAirport } from "../../records/Itinerary";

type Context = {|
  arrival: string,
  departure: string,
  id: string,
  highlightId: string,
  onSetHighlight: (arg: DifferentAirport | null) => void,
|};

const differentAirportDefault = {
  arrival: "arrival",
  departure: "code",
  id: "id",
  highlightId: "id",
};

const contextDefault: Context = {
  ...differentAirportDefault,
  onSetHighlight: () => {},
};

type Props = {|
  children: React.Node,
|};

export const ItineraryContext: React.Context<Context> = React.createContext(contextDefault);

const ItineraryContextProvider = ({ children }: Props) => {
  const [highlighted, onSetHighlight] = React.useState(contextDefault);

  return (
    <ItineraryContext.Provider value={{ ...highlighted, onSetHighlight }}>
      {children}
    </ItineraryContext.Provider>
  );
};

export default ItineraryContextProvider;
