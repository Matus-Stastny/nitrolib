// @flow strict
import getFlightsDifferentAirports from "../getFlightsDifferentAiports";
import ItineraryMock from "../__mocks__/ItineraryMock";

const expected = [
  {
    arrival: "AMS",
    departure: "Different Airport Code",
    highlightId: "19820896296266605_0",
    id: "19820896296266605_1",
  },
];

describe("#getFlightsDifferentAirports", () => {
  it("should get different airports", () => {
    expect(getFlightsDifferentAirports(ItineraryMock)).toEqual(expected);
  });
});
