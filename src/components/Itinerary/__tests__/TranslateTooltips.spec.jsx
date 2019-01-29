// @flow strict
import * as React from "react";
import { mount } from "enzyme";

import TranslateToolTips from "../TranslateTooltips";

const differentAirports = {
  arrival: "AMS",
  departure: "Different Airport Code",
  id: "19820896296266605_1",
  highlightId: "19820896296266605_0",
};

describe("TranslateToolTips", () => {
  it("should return translation for outbound tooltip", () => {
    const component = mount(
      <TranslateToolTips
        differentAirport={differentAirports}
        highlight={jest.fn()}
        code="chebuRkek"
      />,
    );

    expect(component.find("Translate").prop("t")).toEqual("common.different_airport_return");
  });

  it("should return translation for inbound tooltip", () => {
    const component = mount(
      <TranslateToolTips
        isReturnTrip
        differentAirport={differentAirports}
        highlight={jest.fn()}
        code="chebuRkek"
      />,
    );

    expect(component.find("Translate").prop("t")).toEqual("common.different_airport_return_first");
  });
});
