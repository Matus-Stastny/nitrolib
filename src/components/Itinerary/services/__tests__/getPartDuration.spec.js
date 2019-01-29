// @flow strict
import getPartDuration from "../getPartDuration";
import parts from "../__mocks__/ItineraryPartsMock";

describe("#func getPartDuration", () => {
  it("should return single part duration", () => {
    expect(getPartDuration(parts[0])).toEqual(6000000);
  });
});
