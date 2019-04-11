// @flow strict
import * as React from "react";
import { mount } from "enzyme";

import { baggageData } from "../../../../../records/__mocks__/baggageData";
import Container from "../index";
import BaggageOverview from "../../../index";

const passengers = [
  {
    paxId: 1,
    firstName: "Barrack",
    middleName: "Hussein",
    lastName: "Obama",
    baggage: {
      holdBag: 1,
      handBag: 2,
    },
  },
  {
    paxId: 2,
    firstName: "Donald",
    middleName: "John",
    lastName: "Trump",
    baggage: {
      holdBag: 1,
      handBag: 3,
    },
  },
  {
    paxId: 3,
    firstName: "George",
    lastName: "Bush",
    baggage: {
      holdBag: 0,
      handBag: 1,
    },
  },
];

const propsWithCombinations = {
  passengers,
  baggage: baggageData,
  context: "booking",
};

describe("#Container", () => {
  test("renders ", () => {
    const wrapper = mount(
      <Container {...propsWithCombinations}>{props => <BaggageOverview {...props} />}</Container>,
    );
    expect(wrapper.find("BaggageOverview__Wrapper").exists()).toBe(true);
    const OptionalColumnWrapper = wrapper.find("BaggageItem__OptionalColumnWrapper");
    expect(OptionalColumnWrapper.exists()).toBe(true);
    expect(
      OptionalColumnWrapper.find("Text")
        .first()
        .text(),
    ).toBe("D. J. Trump, G. Bush");
  });
});
