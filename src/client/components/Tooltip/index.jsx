// @flow strict
import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { BORDER_RADIUS } from "client/consts/layout";
import { brandDefault } from "client/records/Brand";
import mq from "client/services/utils/mediaQuery";

type Props = {|
  position: "left" | "right" | "top" | "bottom",
  tip: React.Node,
  inline: boolean,
  mobile: boolean,
  children: React.Node,
|};

type State = {|
  shown: boolean,
|};

const TIP_ARROW_SIZE = 5;
const TIP_OFFSET = 2;

const Container = styled.span`
  position: relative;
  display: ${props => (props.inline ? "inline-block" : "block")};
  ${props =>
    !props.inline &&
    `
      width: 100%;
    `};
`;

// $FlowIssue
Container.propTypes = {
  inline: PropTypes.bool.isRequired,
};

const Tip = styled.span`
  position: absolute;
  opacity: ${props => (props.shown ? "1" : "0")};
  ${props => !props.mobile && `display: none;`}
  ${props =>
    !props.shown &&
    `
      width: 0;
      height: 0;
      overflow: hidden;
    `}
  transition: opacity 0.2s;
  z-index: 2;
  ${props =>
    (props.position === "left" &&
      `
        right: 100%;
        padding-right: ${TIP_ARROW_SIZE}px;
        margin-right: ${TIP_OFFSET}px;
      `) ||
    (props.position === "right" &&
      `
        left: 100%;
        padding-left: ${TIP_ARROW_SIZE}px;
        margin-left: ${TIP_OFFSET}px;
      `) ||
    (props.position === "top" &&
      `
        bottom: 100%;
        padding-bottom: ${TIP_ARROW_SIZE}px;
        margin-bottom: ${TIP_OFFSET}px;
      `) ||
    (props.position === "bottom" &&
      `
        top: 100%;
        padding-top: ${TIP_ARROW_SIZE}px;
        margin-top: ${TIP_OFFSET}px;
      `)};

  ${props =>
    props.position === "left" || props.position === "right"
      ? `
        top: 50%;
        transform: translateY(-50%);
      `
      : `
        left: 50%;
        transform: translateX(-50%);
      `};

  ${mq.gtTablet`
    display: block;
  `}

  &:before {
    display: block;
    content: "";
    position: absolute;
    width 0;
    height 0;
    border-color transparent;
    border-style solid;
    border-width: ${TIP_ARROW_SIZE + 1}px;
    ${props =>
      (props.position === "left" &&
        `
          right: 0;
          border-right-width: 0;
          border-left-color: ${props.theme.colors["grey-900"]};
        `) ||
      (props.position === "right" &&
        `
          left: 0;
          border-left-width: 0;
          border-right-color: ${props.theme.colors["grey-900"]};
        `) ||
      (props.position === "top" &&
        `
          bottom: 0;
          border-bottom-width: 0;
          border-top-color: ${props.theme.colors["grey-900"]};
        `) ||
      (props.position === "bottom" &&
        `
          top: 0;
          border-top-width: 0;
          border-bottom-color: ${props.theme.colors["grey-900"]};
        `)};

    ${props =>
      props.position === "left" || props.position === "right"
        ? `
          top: 50%;
          transform: translateY(-50%);
        `
        : `
          left: 50%;
          transform: translateX(-50%);
        `};
  }
`;

// $FlowIssue
Tip.propTypes = {
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
  shown: PropTypes.bool.isRequired,
  mobile: PropTypes.bool.isRequired,
};

Tip.defaultProps = {
  theme: brandDefault.theme,
};

const TipContent = styled.span`
  display: block;
  padding: 6px 8px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors["grey-900"]};
  border-radius: ${BORDER_RADIUS}px;
`;

TipContent.defaultProps = {
  theme: brandDefault.theme,
};

class Tooltip extends React.PureComponent<Props, State> {
  static defaultProps = {
    inline: false,
    mobile: false,
  };

  state = {
    shown: false,
  };

  handleIn = () => {
    this.setState({ shown: true });
  };

  handleOut = () => {
    this.setState({ shown: false });
  };

  render() {
    const { tip, position, inline, mobile, children } = this.props;

    return (
      <Container
        onTouchStart={this.handleIn}
        onTouchEnd={this.handleOut}
        onMouseOver={this.handleIn}
        onMouseOut={this.handleOut}
        onFocus={this.handleIn}
        onBlur={this.handleOut}
        inline={inline}
      >
        {children}
        <Tip shown={this.state.shown} position={position} mobile={mobile}>
          <TipContent>{tip}</TipContent>
        </Tip>
      </Container>
    );
  }
}

export default Tooltip;