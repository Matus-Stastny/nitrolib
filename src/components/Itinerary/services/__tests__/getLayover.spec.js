// @flow
import getLayover from "../getLayover";
import ItineraryMock from "../__mocks__/ItineraryMock";

const expected = [
  // {
  //   duration: 5100000,
  //   nightsInDestination: 0,
  //   place: {
  //     city: "amsterdam_nl",
  //     code: "AMS",
  //     country: "NL",
  //     name: "Amsterdam",
  //     station: "Amsterdam Airport Schiphol",
  //   },
  //   switchToPlace: {
  //     city: "amsterdam_nl",
  //     code: "Different Airport Code",
  //     country: "NL",
  //     name: "Amsterdam",
  //     station: "Amsterdam Airport Schiphol",
  //   },
  // },
];

describe("#func getLayover", () => {
  it("should return changed layover", () => {
    expect(getLayover(ItineraryMock)).toEqual(expected);
  });
});
