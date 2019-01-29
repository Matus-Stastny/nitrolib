// @flow strict
import * as React from "react";
import ToolTip from "@kiwicom/orbit-components/lib/Tooltip";
import styled from "styled-components";

import Translate from "../Translate";
import type { DifferentAirport } from "../../records/Itinerary";
import { themeDefault } from "../../records/Theme";
import type { ThemeProps } from "../../records/Theme";

type Props = {|
  differentAirport: DifferentAirport,
  highlight: (arg: DifferentAirport | null) => void,
  isReturnTrip?: boolean,
  code: string,
|};

const ColoredCode = styled.span`
  color: ${({ theme }: ThemeProps) => theme.orbit.paletteRedNormal};
  text-decoration: underline;
  &:hover {
    background: ${({ theme }: ThemeProps) => theme.orbit.paletteRedLightHover};
    border-radius: ${({ theme }: ThemeProps) => theme.orbit.borderRadiusNormal};
  }
`;

ColoredCode.defaultProps = {
  theme: themeDefault,
};

const TranslateTooltip = ({ differentAirport, highlight, code, isReturnTrip }: Props) => {
  const options = {
    arrival: differentAirport.arrival,
    departure: differentAirport.departure,
  };

  const translation = isReturnTrip ? (
    <Translate values={options} t="common.different_airport_return_first" />
  ) : (
    <Translate values={options} t="common.different_airport_return" />
  );

  return (
    <ToolTip content={translation}>
      <ColoredCode
        onMouseEnter={() => highlight(differentAirport)}
        onMouseLeave={() => highlight(null)}
      >
        {code}
      </ColoredCode>
    </ToolTip>
  );
};

export default TranslateTooltip;
