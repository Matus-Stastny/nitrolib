// @flow strict
import styled from "styled-components";

import type { ThemeProps } from "../../../records/Theme";
import { themeDefault } from "../../../records/Theme";

const NoResult = styled.div`
  padding: ${({ theme }: ThemeProps) => theme.orbit.spaceSmall};
`;

NoResult.defaultProps = {
  theme: themeDefault,
};

export default NoResult;
