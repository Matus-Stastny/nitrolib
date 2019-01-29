// @flow strict
import parts from "./ItineraryPartsMock";

const output = [
  { ...parts[0], isLocalOvernight: false, showDate: true },
  { ...parts[1], isLocalOvernight: true, showDate: true },
];

export default output;
