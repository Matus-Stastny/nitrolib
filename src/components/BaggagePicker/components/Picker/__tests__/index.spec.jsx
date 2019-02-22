// @flow strict
import * as React from "react";
import { shallow } from "enzyme";

import Picker from "../index";
import baggageOptions from "../services/data";

const props = {
  options: baggageOptions,
  pickerType: "handBag",
  onChange: () => {},
  selectedIndex: 5,
  context: "booking",
  currentCombination: undefined,
};

describe("#BaggagePicker", () => {
  test("render", () => {
    const wrapper = shallow(<Picker {...props} />);
    expect(wrapper.find("Option").exists()).toBe(true);
  });

  test("hide options and render show more button", () => {
    const wrapper = shallow(<Picker {...props} />);
    const instance = wrapper.instance();
    expect(instance.state.hiddenItems).toBe(3);
    expect(wrapper.find("Button").exists()).toBe(true);
  });

  test("show all options and don't render show more button", () => {
    const wrapper = shallow(<Picker {...props} options={baggageOptions.slice(0, 4)} />);
    const instance = wrapper.instance();
    expect(instance.state.hiddenItems).toBe(0);
    expect(wrapper.find("Button").exists()).toBe(false);
  });

  test("show all options after clicking on Button", () => {
    const wrapper = shallow(<Picker {...props} />);
    const instance = wrapper.instance();

    expect(instance.state.hiddenItems).toBe(3);
    wrapper.find("Button").simulate("click");
    expect(instance.state.hiddenItems).toBe(0);
  });

  test("getTitle return title with proper translation key", () => {
    const wrapper = shallow(<Picker {...props} />);
    const instance = wrapper.instance();

    const cabinBaggageTitle = instance.getTitle("handBag");
    expect(cabinBaggageTitle.props.t).toEqual("baggage_modal.subheader.cabin_baggage");

    const checkedBaggageTitle = instance.getTitle("holdBag");
    expect(checkedBaggageTitle.props.t).toEqual("baggage_modal.subheader.checked_baggage");
  });

  test("getTooltip returns proper tooltip", () => {
    const wrapper = shallow(<Picker {...props} />);
    const instance = wrapper.instance();

    const cabinBaggageTooltip = instance.getTooltip("handBag");
    expect(cabinBaggageTooltip.props.t).toEqual("baggage_modal.tooltip.cabin_baggage");

    const checkedBaggageTooltip = instance.getTooltip("holdBag");
    expect(checkedBaggageTooltip.props.t).toEqual("baggage_modal.tooltip.checked_baggage");
  });
});
