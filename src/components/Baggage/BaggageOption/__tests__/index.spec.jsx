// @flow strict
import * as React from "react";
import { shallow } from "enzyme";

import BaggageOption from "../index";

const handBagExample = {
  amount: 1,
  category: "cabinBag",
  restrictions: {
    dimensions_sum: 156,
    height: 35,
    length: 45,
    weight: 10,
    width: 20,
  },
};

const props = {
  items: {
    "1": {
      amount: 1,
      category: "holdBag",
      conditions: {
        is_priority: ["FR", "W6"],
      },
      restrictions: {
        dimensions_sum: 156,
        height: 52,
        length: 78,
        weight: 25,
        width: 26,
      },
    },
  },
  price: {
    amount: 0,
    currency: "EUR",
  },
  isChecked: false,
  onClick: jest.fn(),
  shouldShowRecheckNote: false,
};

describe("#BaggageOption", () => {
  test("render priority boarding", () => {
    const wrapper = shallow(<BaggageOption {...props} />);
    expect(wrapper.find("PriorityBoardingInfo").exists()).toBe(true);
  });

  test("render alert", () => {
    const wrapper = shallow(<BaggageOption {...props} isChecked shouldShowRecheckNote />);
    expect(wrapper.find("Alert").exists()).toBe(true);
  });

  test("render checked Radio", () => {
    const wrapper = shallow(<BaggageOption {...props} isChecked />);
    expect(wrapper.find("Radio").exists()).toBe(true);
    const radioProps = wrapper.find("Radio").props("checked") || {};
    expect(radioProps.checked).toBe(true);
  });

  test("render no-personal item info", () => {
    const wrapper = shallow(<BaggageOption {...props} items={{ "1": handBagExample }} />);
    expect(wrapper.find("BaggagePersonalItemNone").exists()).toBe(true);
  });
});