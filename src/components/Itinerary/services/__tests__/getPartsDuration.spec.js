// @flow strict
import parts from "../__mocks__/ItineraryPartsMock";
import getPartsDuration from "../getPartsDuration";

describe("#itinerary getPartsDuration", () => {
  it("should return duration of parts", () => {
    expect(getPartsDuration(parts)).toEqual(45000000);
  });
});
