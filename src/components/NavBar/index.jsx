// @flow strict
import * as React from "react";
import styled, { css } from "styled-components";
import { left } from "@kiwicom/orbit-components/lib/utils/rtl";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import { navbar } from "../../styles";
import mq from "../../styles/mq";
import type { ThemeProps } from "../../records/Theme";
import { themeDefault } from "../../records/Theme";
import Flex from "../../primitives/Flex";
import Language from "../Language";
import { Consumer as BrandConsumer } from "../../services/brand/context";
import Help from "./components/Help";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import Currency from "../Currency";
import type { Modal } from "../../consts/modals";
// import Starred from "../Starred"; FIXME add as a full feature
// TODO: replace z-index with Orbit token after refactoring all front-end indexes

type Inverted = ThemeProps & {|
  ...ThemeProps,
  inverted: boolean,
|};

// TODO: replace after orbit breakpoints release
const GtBigMobile = styled.div`
  display: none;
  ${mq.gtBigMobile(css`
    display: block;
  `)}
`;

const Container = styled(Flex)`
  width: 100%;
  position: relative;
  height: ${navbar.height}px;
  background-color: ${({ theme, inverted }: Inverted) =>
    inverted ? theme.orbit.paletteProductNormal : theme.orbit.paletteWhite};
  color: ${({ theme }: ThemeProps) => theme.orbit.paletteInkNormal};
  font-size: ${({ theme }: ThemeProps) => theme.orbit.fontSizeTextSmall};
  font-weight: ${({ theme }: ThemeProps) => theme.orbit.fontWeightMedium};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  padding: 0 10px;
  box-sizing: border-box;

  ${mq.gtTablet(css`
    position: fixed;
    top: 0;
    ${left}: 0;
  `)};
`;

Container.defaultProps = {
  theme: themeDefault,
};

type Props = {|
  starred: React.Node,
  chat: React.Node,
  subscription: React.Node,
  debug: React.Node,
  portal: string,
  onOpenFaq: ?() => void,
  onSetModal: (modal: Modal) => void,
  onSaveLanguage: (lang: string) => void,
  onSelectTrip: (bid: string) => void,
  onLogoClick: (ev: SyntheticMouseEvent<HTMLAnchorElement>) => void,
  // defaulted
  headerLinks: React.Node,
  debug: React.Node,
  inverted: boolean,
|};

const NavBar = ({
  headerLinks,
  starred,
  chat,
  subscription,
  debug,
  portal,
  inverted,
  onOpenFaq,
  onSetModal,
  onSaveLanguage,
  onSelectTrip,
  onLogoClick,
}: Props) => (
  <Container x="space-between" y="center" data-test="NavBar" inverted={inverted}>
    <Flex y="center" x="flex-start">
      <Logo inverted={inverted} onClick={onLogoClick} />
      {headerLinks && (
        <BrandConsumer>{brand => brand.id === "kiwicom" && headerLinks}</BrandConsumer>
      )}
    </Flex>
    <Stack shrink align="center" justify="end" spacing="tight" desktop={{ spacing: "natural" }}>
      <GtBigMobile>
        <Stack spacing="tight" desktop={{ spacing: "natural" }}>
          <Language
            positionMenuDesktop={270}
            positionMenuTablet={5}
            inverted={inverted}
            onChange={onSaveLanguage}
            onSetModal={onSetModal}
          />
          <Currency
            positionMenuDesktop={270}
            positionMenuTablet={5}
            inverted={inverted}
            onSetModal={onSetModal}
          />
        </Stack>
      </GtBigMobile>
      <Help onOpen={onOpenFaq} inverted={inverted} />
      {starred}
      <Menu
        chat={chat}
        subscription={subscription}
        debug={debug}
        onSetModal={onSetModal}
        onSaveLanguage={onSaveLanguage}
        onSelectTrip={onSelectTrip}
        inverted={inverted}
        portal={portal}
      />
    </Stack>
  </Container>
);

NavBar.defaultProps = {
  headerLinks: null,
  debug: null,
  inverted: false,
};

export default NavBar;
