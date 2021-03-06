// @flow
import styled, { css } from "styled-components";
import { right } from "@kiwicom/orbit-components/lib/utils/rtl";
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery";

import type { ThemeProps } from "../../../records/Theme";
import { themeDefault } from "../../../records/Theme";

type Width = {|
  width: string,
  positionMenuTablet: number,
  positionMenuDesktop: number,
|};

const Popup = styled.div`
  position: absolute;
  top: 50px;
  min-width: 100%;
  ${right}: 0;
  font-size: ${({ theme }: ThemeProps) => theme.orbit.fontSizeTextNormal};
  background: ${({ theme }: ThemeProps) => theme.orbit.paletteCloudLight};
  color: ${({ theme }: ThemeProps) => theme.orbit.paletteInkNormal};
  border-radius: ${({ theme }: ThemeProps) => theme.orbit.borderRadiusNormal};
  cursor: default;
  box-shadow: ${({ theme }: ThemeProps) => theme.orbit.boxShadowElevatedLevel1};

  ${mq.desktop(css`
    ${right}: ${({ positionMenuDesktop }) => `${positionMenuDesktop}px`};
  `)};

  ${mq.largeMobile(css`
    ${right}: ${({ positionMenuTablet }) => `${positionMenuTablet}px`};
    min-width: ${({ width }: Width) => width || `550px`};
  `)};
`;

Popup.defaultProps = {
  theme: themeDefault,
};

export default Popup;
