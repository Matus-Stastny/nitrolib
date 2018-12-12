// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Starred from "..";

describe("#Starred", () => {
  test("render open", () => {
    const wrapper = shallow(<Starred positionMenuDesktop={0} positionMenuTablet={0} inverted />);

    expect(wrapper.prop("children")({ open: true, onToggle: jest.fn() })).toMatchSnapshot();
  });

  test("render closed", () => {
    const wrapper = shallow(<Starred positionMenuDesktop={0} positionMenuTablet={0} inverted />);

    expect(wrapper).toMatchSnapshot();
  });
});
