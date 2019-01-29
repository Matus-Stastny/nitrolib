// @flow
import isLocalOverNightPart from "../isLocalOverNightPart";
import parts from "../__mocks__/ItineraryPartsMock";

describe("#isLocalOverNightPart", () => {
  it("should return false", () => {
    expect(isLocalOverNightPart(parts[0])).toEqual(false);
  });

  it("should return true", () => {
    expect(isLocalOverNightPart(parts[1])).toEqual(true);
  });
});
