// @flow strict
import * as React from "react";
import styled, { css } from "styled-components";

import { navbar } from "../../styles";
import mq from "../../styles/mq";
import * as rtl from "../../styles/rtl";
import Desktop from "../Desktop";
import Mobile from "../Mobile";
import type { ThemeProps } from "../../records/Theme";
import { themeDefault } from "../../records/Theme";
import Flex from "../../primitives/Flex";
import Language from "../Language";
import { Consumer as AuthConsumer } from "../../services/auth/context";
import { Consumer as BrandConsumer } from "../../services/brand/context";
import { Consumer as LogConsumer } from "../../services/log/context";
import { Provider as InvertedProvider } from "../../services/inverted/context";
import Help from "./components/Help";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import Currency from "../Currency";
import type { ModalType } from "../../consts/modals";
// import Starred from "../Starred"; FIXME add as a full feature
// TODO: replace z-index with Orbit token after refactoring all front-end indexes

type Inverted = ThemeProps & {|
  inverted?: boolean,
|};

const Container = styled(Flex)`
  width: 100%;
  position: relative;
  height: ${navbar.height}px;
  background-color: ${({ theme, inverted }: Inverted) =>
    inverted ? theme.orbit.paletteProductNormal : theme.orbit.paletteWhite};
  color: ${({ theme }: ThemeProps) => theme.orbit.paletteInkNormal};
  ${({ shadow }) => shadow && `box-shadow: 0 0 3px rgba(0,0,0,.25);`};
  padding: 0 10px;
  box-sizing: border-box;
  z-index: 824;

  ${mq.gtTablet(css`
    position: fixed;
    top: 0;
    ${rtl.left}: 0;
  `)};
`;

Container.defaultProps = {
  theme: themeDefault,
};

const marginMixin = css`
  margin-${rtl.left}: 20px;
  &:first-child {
    margin-${rtl.left}: 0;
  }
  ${mq.ltTablet(css`
    margin-${rtl.left}: 5px;
  `)};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }: ThemeProps) => theme.orbit.spaceSmall};
  font-weight: ${({ theme }: ThemeProps) => theme.orbit.fontWeightMedium};
  & > div {
    ${marginMixin};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  & > button {
    ${marginMixin};
  }
`;

Wrapper.defaultProps = {
  theme: themeDefault,
};

type Props = {|
  headerLinks?: React.Node,
  starred: React.Node,
  chat: React.Node,
  subscription: React.Node,
  debug?: React.Node,
  shadow?: boolean,
  inverted?: boolean,
  onOpenFaq?: () => void,
  onSetModal: (modal: ModalType) => void,
  onSaveLanguage: (lang: string) => void,
  onSelectTrip: (bid: string) => void,
  onLogoClick: (ev: SyntheticMouseEvent<HTMLAnchorElement>) => void,
  portal?: string,
|};

const NavBar = ({
  headerLinks,
  starred,
  chat,
  subscription,
  debug,
  portal,
  shadow,
  inverted,
  onOpenFaq,
  onSetModal,
  onSaveLanguage,
  onSelectTrip,
  onLogoClick,
}: Props) => (
  <InvertedProvider value={{ inverted }}>
    <LogConsumer>
      {({ log }) => (
        <Container
          x="space-between"
          y="center"
          shadow={shadow}
          dataTest="Navbar"
          inverted={inverted}
        >
          <Flex y="center" x="flex-start">
            <Logo inverted={inverted} onClick={onLogoClick} />
            {headerLinks && (
              <BrandConsumer>{brand => brand.id === "kiwicom" && headerLinks}</BrandConsumer>
            )}
          </Flex>
          <Flex y="center">
            <Wrapper>
              <Desktop display="flex">
                <ButtonWrapper>
                  <Language
                    positionMenuDesktop={270}
                    positionMenuTablet={5}
                    onChange={onSaveLanguage}
                  />
                  <Currency positionMenuDesktop={270} positionMenuTablet={5} />
                  <Help onOpen={onOpenFaq} inverted={inverted} />
                </ButtonWrapper>
              </Desktop>
              {starred}
              <Mobile>
                <Help onOpen={onOpenFaq} inverted={inverted} />
              </Mobile>
              <AuthConsumer>
                {({ onResetError }) => (
                  <Menu
                    chat={chat}
                    subscription={subscription}
                    debug={debug}
                    onResetError={onResetError}
                    onSetModal={onSetModal}
                    onSaveLanguage={onSaveLanguage}
                    onSelectTrip={onSelectTrip}
                    onLog={log}
                    inverted={inverted}
                    portal={portal}
                  />
                )}
              </AuthConsumer>
            </Wrapper>
          </Flex>
        </Container>
      )}
    </LogConsumer>
  </InvertedProvider>
);

NavBar.defaultProps = {
  shadow: true,
  onLogoClick: () => {},
};

export default NavBar;
