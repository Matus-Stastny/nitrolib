// @flow strict
import tripColors from "../tripColors";

describe("#func directionToColor", () => {
  it("should change colors by trip index", () => {
    expect(tripColors(0, "#000")).toEqual("#0097A9");
  });
  it("should return default color", () => {
    expect(tripColors(111, "#000")).toEqual("#000");
  });
});
