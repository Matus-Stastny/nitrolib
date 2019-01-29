// @flow strict
import determineShowDate from "../determineShowDate";
import outputParts from "../__mocks__/showDateOutPutMock";
import inputParts from "../__mocks__/ItineraryPartsMock";

describe("#func determineShowDate", () => {
  it("should return new objects with ShowDate and LocalOvernight properties", () => {
    expect(determineShowDate(inputParts)).toEqual(outputParts);
  });
});
