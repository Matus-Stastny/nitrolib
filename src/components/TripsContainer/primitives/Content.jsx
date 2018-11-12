// @flow strict
import styled from "styled-components";

import { themeDefault } from "../../../records/Theme";
import type { ThemeProps } from "../../../records/Theme";

type AllProps = ThemeProps & {
  padding: boolean,
};

const Content = styled.div`
<<<<<<< HEAD
  padding: ${({ padding, theme }: AllProps) => (padding ? theme.orbit.spaceSmall : `0`)};
=======
  max-height: calc(100vh - 140px);
  padding: ${({ padding }: Padding) => (padding ? `12px` : `0`)};
  overflow-y: auto;
  overflow-x: hidden;
>>>>>>> 493a77f0... Starred: Duration Component
`;

Content.defaultProps = {
  theme: themeDefault,
};

export default Content;
