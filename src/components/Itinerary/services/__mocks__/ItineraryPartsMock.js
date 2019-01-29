// @flow
const parts = [
  {
    id: "19820896296266605_0",
    number: "9762",
    type: "flight",
    departure: {
      where: { code: "DUB", name: "Dublin", city: "dublin_ie", country: "IE", station: "Dublin" },
      when: { local: "2019-02-27T13:25:00.000Z", utc: "2019-02-27T13:25:00.000Z" },
    },
    arrival: {
      where: {
        code: "AMS",
        name: "Amsterdam",
        city: "amsterdam_nl",
        country: "NL",
        station: "Amsterdam Airport Schiphol",
      },
      when: { local: "2019-02-27T16:05:00.000Z", utc: "2019-02-27T15:05:00.000Z" },
    },
    airline: { code: "MF", name: "Xiamen Airlines", logo: "MF", closeBookingHours: 4 },
    operatingAirline: {
      code: "KL",
      name: "KLM Royal Dutch Airlines",
      logo: { id: "KL", lcc: "0", name: "KLM Royal Dutch Airlines", logo: "KL" },
    },
    vehicle: { type: "aircraft" },
    priorityBoarding: false,
    isHidden: false,
    guarantee: false,
    tripIndex: "0",
    isCabinBagsWithPriorityBoarding: false,
  },
  {
    id: "19820896296266605_1",
    number: "9803",
    type: "flight",
    departure: {
      where: {
        code: "Different Airport Code",
        name: "Amsterdam",
        city: "amsterdam_nl",
        country: "NL",
        station: "Amsterdam Airport Schiphol",
      },
      when: { local: "2019-02-27T17:30:00.000Z", utc: "2019-02-27T16:30:00.000Z" },
    },
    arrival: {
      where: {
        code: "PEK",
        name: "Beijing",
        city: "beijing_cn",
        country: "CN",
        station: "Beijing Capital International",
      },
      when: { local: "2019-02-28T09:55:00.000Z", utc: "2019-02-28T01:55:00.000Z" },
    },
    airline: { code: "MF", name: "Xiamen Airlines", logo: "MF", closeBookingHours: 4 },
    operatingAirline: {
      code: "KL",
      name: "KLM Royal Dutch Airlines",
      logo: { id: "KL", lcc: "0", name: "KLM Royal Dutch Airlines", logo: "KL" },
    },
    vehicle: { type: "aircraft" },
    priorityBoarding: false,
    isHidden: false,
    guarantee: false,
    tripIndex: "0",
    isCabinBagsWithPriorityBoarding: false,
  },
];

export default parts;
