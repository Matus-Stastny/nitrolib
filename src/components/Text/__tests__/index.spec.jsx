// @flow strict
import * as React from "react";
import { shallow } from "enzyme";

import Text from "..";

describe("#Text", () => {
  test("string", () => {
    const wrapper = shallow(<Text t="lol" />);

    expect(wrapper).toMatchSnapshot();
  });

  test("html", () => {
    const wrapper = shallow(<Text t="lol" html />);

    expect(wrapper).toMatchSnapshot();
  });
});
