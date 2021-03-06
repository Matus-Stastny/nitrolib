// @flow
/* eslint-env node */

import * as React from "react";
import { mount } from "enzyme";

import KiwiLogin from "..";

import AccountPassword from "../../../../AccountPassword";

jest.mock("../../../mutations/ResetPassword");
jest.mock("../../../mutations/SignIn");

const defaultProps = {
  email: "",
  magicLinkError: "",
  isSendingEmail: false,
  brandId: "",
  onResetMagicLinkError: () => {},
  onClose: () => {},
  onChangeScreen: () => {},
  onAskSignInLink: () => {},
  onSignIn: () => {},
};

describe("#KiwiLogin", () => {
  it("should render", () => {
    const wrapper = mount(<KiwiLogin {...defaultProps} />);

    expect(wrapper.find(AccountPassword).exists()).toBe(true);
  });

  it("handles forgotten password", done => {
    const onChangeScreen = jest.fn();
    const wrapper = mount(<KiwiLogin {...defaultProps} onChangeScreen={onChangeScreen} />);

    wrapper
      .find("a")
      .at(1)
      .simulate("click");

    setImmediate(() => {
      expect(onChangeScreen).toHaveBeenCalled();
      done();
    });
  });

  it("handles request to change email", () => {
    const onChangeScreen = jest.fn();
    const wrapper = mount(<KiwiLogin {...defaultProps} onChangeScreen={onChangeScreen} />);

    wrapper
      .find("a")
      .at(0)
      .simulate("click");

    expect(onChangeScreen).toHaveBeenCalled();
  });

  it("handles sign in", done => {
    const onSignIn = jest.fn();
    const onClose = jest.fn();
    const wrapper = mount(
      <KiwiLogin
        {...defaultProps}
        email="joe.doe@example.com"
        onSignIn={onSignIn}
        onClose={onClose}
      />,
    );
    wrapper
      .find(`input[data-test="Password"]`)
      .simulate("change", { target: { value: "qwertyuiop123" } });
    wrapper.find("form").simulate("submit");

    setImmediate(() => {
      expect(onSignIn).toHaveBeenCalled();
      expect(onClose).toHaveBeenCalled();
      done();
    });
  });
});
