// @flow strict
import { normalize } from "normalizr";

import type { Sector, SectorDeep } from "./Sector";
import type { Carrier, Segment } from "./Segment";
import { sector } from "./Sector";

export type Price = {|
  amount: string,
  currencyId: string,
|};

export type Provider = {|
  id: string,
  name: string,
  code: string,
|};

type Common = {|
  id: string,
  price: Price,
  provider: Provider,
  hasNoCheckedBags: boolean,
|};

export type ItineraryOneWay = {|
  ...Common,
  type: "oneWay",
  sector: string, // normalized, Sector
|};

export type ItineraryOneWayDeep = {|
  ...ItineraryOneWay,
  sector: SectorDeep,
|};

export const itineraryOneWay = {
  sector,
};

export type ItineraryReturn = {|
  ...Common,
  type: "return",
  outbound: string, //  normalized, Sector
  inbound: string, //  normalized, Sector
|};

export type ItineraryReturnDeep = {|
  ...ItineraryReturn,
  outbound: SectorDeep,
  inbound: SectorDeep,
|};

export const itineraryReturn = {
  outbound: sector,
  inbound: sector,
};

export type ItineraryMulticity = {|
  ...Common,
  type: "multicity",
  sectors: string[], // normalized, Sector[]
|};

export type ItineraryMulticityDeep = {|
  ...ItineraryMulticityDeep,
  sectors: SectorDeep[],
|};

export const itineraryMulticity = {
  sectors: [sector],
};

export type ItineraryNomad = {|
  ...Common,
  type: "nomad",
  sectors: string[], // normalized, Sector[]
|};

export type ItineraryNomadDeep = {|
  ...ItineraryNomad,
  sectors: SectorDeep[],
|};

export const itineraryNomad = {
  sectors: [sector],
};

export type Itinerary = ItineraryOneWay | ItineraryReturn | ItineraryMulticity | ItineraryNomad;

export type ItineraryDeep =
  | ItineraryOneWayDeep
  | ItineraryReturnDeep
  | ItineraryMulticityDeep
  | ItineraryNomadDeep;

export type ItineraryNormalized = {|
  result: Itinerary,
  entities: {|
    sector: { [id: string]: Sector },
    segment: { [id: string]: Segment },
    carrier: { [id: string]: Carrier },
  |},
|};

export const flatten = (data: ItineraryDeep): ItineraryNormalized => {
  if (data.type === "oneWay") {
    return normalize(data, itineraryOneWay);
  }

  if (data.type === "return") {
    return normalize(data, itineraryReturn);
  }

  if (data.type === "multicity") {
    return normalize(data, itineraryMulticity);
  }

  return normalize(data, itineraryNomad);
};
