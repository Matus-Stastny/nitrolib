// @flow strict
const getTripsOutput = [
  [
    {
      airline: { closeBookingHours: 4, code: "MF", logo: "MF", name: "Xiamen Airlines" },
      arrival: {
        when: { local: "2019-02-27T16:05:00.000Z", utc: "2019-02-27T15:05:00.000Z" },
        where: {
          city: "amsterdam_nl",
          code: "AMS",
          country: "NL",
          name: "Amsterdam",
          station: "Amsterdam Airport Schiphol",
        },
      },
      departure: {
        when: { local: "2019-02-27T13:25:00.000Z", utc: "2019-02-27T13:25:00.000Z" },
        where: { city: "dublin_ie", code: "DUB", country: "IE", name: "Dublin", station: "Dublin" },
      },
      guarantee: false,
      id: "19820896296266605_0",
      isCabinBagsWithPriorityBoarding: false,
      isHidden: false,
      number: "9762",
      operatingAirline: {
        code: "KL",
        logo: { id: "KL", lcc: "0", logo: "KL", name: "KLM Royal Dutch Airlines" },
        name: "KLM Royal Dutch Airlines",
      },
      priorityBoarding: false,
      tripIndex: "0",
      type: "flight",
      vehicle: { type: "aircraft" },
    },
    {
      airline: { closeBookingHours: 4, code: "MF", logo: "MF", name: "Xiamen Airlines" },
      arrival: {
        when: { local: "2019-02-28T09:55:00.000Z", utc: "2019-02-28T01:55:00.000Z" },
        where: {
          city: "beijing_cn",
          code: "PEK",
          country: "CN",
          name: "Beijing",
          station: "Beijing Capital International",
        },
      },
      departure: {
        when: { local: "2019-02-27T17:30:00.000Z", utc: "2019-02-27T16:30:00.000Z" },
        where: {
          city: "amsterdam_nl",
          code: "Different Airport Code",
          country: "NL",
          name: "Amsterdam",
          station: "Amsterdam Airport Schiphol",
        },
      },
      guarantee: false,
      id: "19820896296266605_1",
      isCabinBagsWithPriorityBoarding: false,
      isHidden: false,
      number: "9803",
      operatingAirline: {
        code: "KL",
        logo: { id: "KL", lcc: "0", logo: "KL", name: "KLM Royal Dutch Airlines" },
        name: "KLM Royal Dutch Airlines",
      },
      priorityBoarding: false,
      tripIndex: "0",
      type: "flight",
      vehicle: { type: "aircraft" },
    },
  ],
];

export default getTripsOutput;
