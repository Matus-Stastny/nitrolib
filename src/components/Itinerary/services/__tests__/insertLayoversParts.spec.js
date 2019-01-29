// @flow strict
import insertLayoversParts from "../insertLayoversParts";
import ItineraryParts from "../__mocks__/ItineraryPartsMock";
import insertLayoverOutput from "../__mocks__/insertLayoverOutput";

describe("#insertLayoverParts test", () => {
  test("Shoud insert Layover Parts", () => {
    expect(insertLayoversParts(ItineraryParts)).toEqual(insertLayoverOutput);
  });
});
