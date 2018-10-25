// @flow strict
import * as React from "react";
import Airplane from "@kiwicom/orbit-components/lib/icons/Airplane";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import styled, { css } from "styled-components";

import mq from "../../styles/mq";
import * as rtl from "../../styles/rtl";
import ClickOutside from "../ClickOutside";
import Toggle from "../Toggle";
import Popup from "./primitives/Popup";
import IconWrapper from "./primitives/IconWrapper";
import Links from "./Links";
import Desktop from "../Desktop";
import Mobile from "../Mobile";
import { Consumer as InvertedConsumer } from "../../services/inverted/context";
import { getNavBarLinks } from "./services/api";

const Margin = styled.div`
  ${mq.mobile(css`
    margin-${rtl.left}: 20px;
  `)};
`;

// TODO: edit this
type Services = any;

type State = {|
  services: ?Services,
|};

type Props = {|
  searchParams: {
    currency: string,
    language: string,
    adultsCount: number,
    childrenCount: number,
    aid: boolean,
  },
  urlParam: string,
|};

class HeaderLinks extends React.Component<Props, State> {
  state = {
    services: null,
  };

  static defaultProps = {
    searchParams: {
      currency: "eur",
      language: "en",
      adultsCount: 1,
      childrenCount: 0,
      aid: true,
    },
    urlParam: "search",
  };

  componentDidMount() {
    this.getNavBarLinks();
  }

  getNavBarLinks = async () => {
    try {
      // Fetch services
      const services: any = await getNavBarLinks();

      // Update state
      this.setState({ services });
    } catch (e) {
      // TODO: Track error
    }
  };

  render() {
    const { searchParams, urlParam } = this.props;
    const { services } = this.state;

    // Hide until response
    if (!services) return null;

    return (
      <>
        <Mobile display="flex">
          <Margin>
            <Toggle>
              {({ open, onToggle }) => (
                <>
                  {open && (
                    <ClickOutside onClickOutside={onToggle}>
                      <Popup>
                        <Links
                          urlParam={urlParam}
                          searchParams={searchParams}
                          services={services}
                        />
                      </Popup>
                    </ClickOutside>
                  )}
                  <IconWrapper hover onClick={onToggle}>
                    <Airplane />
                    <ChevronDown size="small" />
                  </IconWrapper>
                </>
              )}
            </Toggle>
          </Margin>
        </Mobile>
        <Desktop display="flex">
          <Links urlParam={urlParam} searchParams={searchParams} services={services} />
        </Desktop>
      </>
    );
  }
}

export default HeaderLinks;
