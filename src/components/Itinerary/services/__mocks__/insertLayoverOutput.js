// @flow
import parts from "./ItineraryPartsMock";

const layover = {
  bagsRecheckRequired: undefined,
  code: "Different Airport Code",
  country: "NL",
  differentAirport: {
    arrival: "AMS",
    departure: "Different Airport Code",
  },
  duration: 5100000,
  hasGuarantee: false,
  id: undefined,
  isLayoverBetweenFlights: false,
  name: "Amsterdam",
  type: "layover",
};

const output = [{ ...parts[0] }, layover, { ...parts[1] }];

export default output;
