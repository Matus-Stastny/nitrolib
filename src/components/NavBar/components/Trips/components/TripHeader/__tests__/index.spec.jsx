// @flow strict
import * as React from "react";
import { mount } from "enzyme";

import { TripHeaderUnwrapped as TripHeader } from "..";

const trips: any = {
  edges: [
    {
      node: {
        isPastBooking: false,
      },
    },
  ],
};

const wrapper = mount(<TripHeader trips={trips} />);

describe("#TripHeader", () => {
<<<<<<< HEAD
  it("should render with trips prop", () => {
    expect(wrapper.prop("trips")).toBe(trips);
  });

  it("should return Translate for upcoming trip", () => {
    expect(
      wrapper
        .find("Translate")
        .first()
        .prop("values"),
    ).toEqual({ trips: 1 });
  });
=======
  test("render", () => {
    const wrapper = shallow(<TripHeader list={trips} />);
>>>>>>> 493a77f0... Starred: Duration Component

  it("should has Translate for past trips", () => {
    expect(
      wrapper
        .find("Translate")
        .at(1)
        .exists(),
    ).toBe(true);
  });
});
