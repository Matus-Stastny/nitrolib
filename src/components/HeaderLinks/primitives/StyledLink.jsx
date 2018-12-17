// @flow strict
import styled, { css } from "styled-components";

import mq from "../../../styles/mq";
import { themeDefault } from "../../../records/Theme";
import type { ThemeProps } from "../../../records/Theme";

type LinkProps = {|
  ...ThemeProps,
  active: boolean,
  inverted: boolean,
  highlightLinks: boolean,
|};

const StyledLink = styled.a`
  font-weight: ${({ theme }: ThemeProps) => theme.orbit.fontWeightMedium};
  font-size: ${({ theme }: ThemeProps) => theme.orbit.fontSizeTextSmall};
  text-decoration: none;
  cursor: pointer;

  &:link,
  &:visited {
    color: ${({ active, theme, inverted, highlightLinks }: LinkProps) =>
      inverted
        ? (active && theme.orbit.paletteWhiteActive) || theme.orbit.paletteWhite
        : ((active || highlightLinks) && theme.orbit.paletteProductNormal) ||
          theme.orbit.paletteInkNormal};

    &:hover {
      color: ${({ theme, inverted }: LinkProps) =>
        inverted ? theme.orbit.paletteWhiteHover : theme.orbit.paletteProductNormal};
    }
  }

  ${mq.ltTablet(css`
    font-weight: ${({ theme }: ThemeProps) => theme.orbit.fontWeightNormal};
    font-size: ${({ theme }: ThemeProps) => theme.orbit.fontSizeTextNormal};

    &:link,
    &:visited {
      color: ${({ theme, highlightLinks }: LinkProps) =>
        highlightLinks ? theme.orbit.paletteProductNormal : theme.orbit.paletteInkNormal};
      i {
        color: ${({ theme }) => theme.orbit.paletteInkNormal};
      }
    }

    &:link, &:visited {
      color: ${({ active, theme }: LinkProps) =>
        active ? theme.orbit.paletteProductNormal : theme.orbit.paletteInkNormal};

      i {
        color: ${({ theme }) => theme.orbit.paletteInkNormal};
      }

      &:hover {
        color: ${({ theme }: LinkProps) => theme.orbit.paletteProductNormal};

        i {
          color: ${({ theme }) => theme.orbit.paletteInkNormal};
        }
      }
    }
  `)}
`;

StyledLink.defaultProps = {
  theme: themeDefault,
};

export default StyledLink;
