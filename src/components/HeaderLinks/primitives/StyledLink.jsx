// @flow
import styled, { css } from "styled-components";

import { themeDefault } from "../../../records/Theme";
import type { ThemeProps } from "../../../records/Theme";
import mq from "../../../styles/mq";
import * as rtl from "../../../styles/rtl";

type LinkProps = {|
  ...ThemeProps,
  active: boolean,
  inverted: boolean,
|};

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  font-size: ${({ theme }: ThemeProps) => theme.orbit.fontSizeTextSmall};
  font-weight: ${({ theme }: ThemeProps) => theme.orbit.fontWeightMedium};
  text-decoration: none;
  position: relative;
  cursor: pointer;
  margin-${rtl.left}: 20px;
  height: 50px;
  line-height: 50px;

  &:link, &:visited {
    color: ${({ active, theme, inverted }: LinkProps) =>
      inverted
        ? (active && theme.orbit.paletteWhiteActive) || theme.orbit.paletteWhite
        : (active && theme.orbit.paletteProductNormal) || theme.orbit.paletteInkNormal};
  }

  &:hover {
    &:link, &:visited {
      color: ${({ theme, inverted }: LinkProps) =>
        inverted ? theme.orbit.paletteWhiteHover : theme.orbit.paletteProductNormal};
    }
  }

  ${mq.mobile(css`
    margin-${rtl.left}: 0;
    padding-${rtl.left}: 10px;
    font-size: ${({ theme }: ThemeProps) => theme.orbit.fontSizeTextLarge};
    font-weight: ${({ theme }: ThemeProps) => theme.orbit.fontWeightNormal};
    &:link, &:visited {
      color: ${({ theme }: LinkProps) => theme.orbit.paletteInkNormal};
    }

    &:hover {
      &:link, &:visited {
        color: ${({ theme }: LinkProps) => theme.orbit.paletteProductNormal};
      }
      i {
        color: ${({ theme }) => theme.orbit.paletteInkNormal};
      }
    }
    i {
      padding-${rtl.right}: 10px;
    }
  `)};
`;

StyledLink.defaultProps = {
  theme: themeDefault,
};

export default StyledLink;
