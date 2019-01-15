// @flow strict
import * as React from "react";
import { shallow } from "enzyme";

import BaggagePicker from "../index";
import exampleData from "../baggagePickerData";

const props = {
  options: exampleData,
  tooltip: <span>Tooltip</span>,
  title: <span>Title</span>,
  onChange: () => {},
  selectedIndex: 5,
  shouldShowRecheckNote: true,
  context: "booking",
};

describe("#BaggagePicker", () => {
  test("render", () => {
    const wrapper = shallow(<BaggagePicker {...props} />);
    expect(wrapper.find("Option").exists()).toBe(true);
  });

  test("hide options and render show more button", () => {
    const wrapper = shallow(<BaggagePicker {...props} />);
    const instance = wrapper.instance();
    expect(instance.state.hiddenItems).toBe(3);
    expect(wrapper.find("Button").exists()).toBe(true);
  });

  test("show all options and don't render show more button", () => {
    const wrapper = shallow(<BaggagePicker {...props} options={exampleData.slice(0, 4)} />);
    const instance = wrapper.instance();
    expect(instance.state.hiddenItems).toBe(0);
    expect(wrapper.find("Button").exists()).toBe(false);
  });

  test("show all options after calling handleToggleOptions", () => {
    const wrapper = shallow(<BaggagePicker {...props} />);
    const instance = wrapper.instance();
    expect(instance.state.hiddenItems).toBe(3);
    instance.handleToggleOptions();
    expect(instance.state.hiddenItems).toBe(0);
  });
});
