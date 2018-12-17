// @flow strict
import * as React from "react";
import AirplaneUp from "@kiwicom/orbit-components/lib/icons/AirplaneUp";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import styled, { css } from "styled-components";
import { left } from "@kiwicom/orbit-components/lib/utils/rtl";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import TextWrapper from "@kiwicom/orbit-components/lib/Text";

import mq from "../../styles/mq";
import ClickOutside from "../ClickOutside";
import Toggle from "../Toggle";
import Popup from "./primitives/Popup";
import IconWrapper from "./primitives/IconWrapper";
import Links from "./components/Links";
import getNavBarLinks from "./services/api";
import withLog from "../../services/log/decorator";
import type { HeaderLink, SearchForm } from "./records/HeaderLink";
import type { Decorated } from "../../services/log/decorator";
import type { Context } from "../../services/log/context";
import type { Splitster, Response } from "./services/api";

const Margin = styled.div`
    margin-${/* sc-custom "left" */ left}: 16px;

  ${mq.ltSmallMobile(css`
    margin-${/* sc-custom "left" */ left}: 0;
  `)}
`;

// Different size than the existing component
const Mobile = styled.div`
  display: flex;

  ${mq.gtDesktop(css`
    display: none;
  `)};
`;

// Different size than the existing component
const Desktop = styled.div`
  display: none;

  ${mq.gtDesktop(css`
    display: flex;
  `)};
`;

type Props = {|
  languageId: string,
  currencyId: string,
  searchForm: SearchForm | null,
  splitster: Splitster,
  active?: string,
  inverted?: boolean,
  onFetch?: (services: Response) => void,
  testResponse?: Response, // TODO solve using DI
  // context
  context: Context<"Header links error", null>, // TODO consts or whatever
|};

type State = {|
  services: HeaderLink[] | null,
|};

class HeaderLinks extends React.Component<Props, State> {
  state = {
    services: null,
  };

  componentDidMount() {
    this.getNavBarLinks();
  }

  getNavBarLinks = async () => {
    const {
      languageId,
      currencyId,
      searchForm,
      testResponse,
      splitster,
      onFetch,
      context,
    } = this.props;

    if (testResponse) {
      this.setState({ services: testResponse.items });
      return;
    }

    try {
      const services = await getNavBarLinks({
        languageId,
        currencyId,
        searchForm,
        splitster,
      });

      this.setState({ services: services.items });
      if (onFetch) {
        onFetch(services);
      }
    } catch (err) {
      context.log({ event: "Header links error", data: err });
    }
  };

  render() {
    const { inverted, active } = this.props;
    const { services } = this.state;
    const { inverted, highlightLinks } = this.props;

    if (!services) return null;

    return (
      // 'StyledLink' css was heavily incompatible with 'Text', so it had to be moved here
      // TODO cleanup @viktr
      <Text element="div">
        <Mobile>
          <Margin>
            <Toggle>
              {({ open, onToggle }) => (
                <ClickOutside active={open} onClickOutside={onToggle}>
                  <>
                    {open && (
                      <Popup>
                        {services && services.length > 0 && (
                          <Stack direction="column">
                            <Links
                              services={services}
                              inverted={inverted}
                              active={active}
                            />
                          </Stack>
                        )}
                      </Popup>
                    )}
                    <IconWrapper hover onClick={onToggle}>
                      <AirplaneUp />
                      <ChevronDown size="small" />
                    </IconWrapper>
                  </>
                </ClickOutside>
              )}
            </Toggle>
          </Margin>
        </Mobile>
        <Desktop>
          {services && services.length > 0 && (
            <Margin>
              <Stack flex align="center">
                <Links services={services} inverted={inverted} active={active} />
              </Stack>
            </Margin>
          )}
        </Desktop>
      </Text>
    );
  }
}

const WithLogHeaderLinks: Decorated<Props> = withLog(HeaderLinks);

export default WithLogHeaderLinks;
