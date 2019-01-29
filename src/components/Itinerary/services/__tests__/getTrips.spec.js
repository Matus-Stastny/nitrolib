// @flow strict
import getTrips from "../getTrips";
import ItineraryMock from "../__mocks__/ItineraryMock";
import getTripsOutput from "../__mocks__/getTripsOutput";

describe("#getTrips test", () => {
  test("Shoud get Trip parts", () => {
    expect(getTrips(ItineraryMock)).toEqual(getTripsOutput);
  });
});
