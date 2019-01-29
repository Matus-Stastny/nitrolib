// @flow strict
import * as React from "react";
import styled from "styled-components";
import FlightDirectIcon from "@kiwicom/orbit-components/lib/icons/FlightDirect";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import type { ItineraryPart } from "../../records/Itinerary";
import getPartsDuration from "./services/getPartsDuration";
import TranslateNode from "../TranslateNode";
import Time from "../Time";
import tripColors from "./services/tripColors";
import { themeDefault } from "../../records/Theme";
import type { ThemeProps } from "../../records/Theme";

type Props = {
  trip: Array<ItineraryPart>,
};

const ItineraryTripLabel = styled.span`
  color: ${({ tripIndex }) => tripColors(tripIndex + 1, "#000")};
  font-weight: ${({ theme }: ThemeProps) => theme.orbit.fontWeightBold};
  text-transform: uppercase;
  font-size: ${({ theme }: ThemeProps) => theme.orbit.spaceSmall};
`;

ItineraryTripLabel.defaultProps = {
  theme: themeDefault,
};

const ItineraryTripTime = styled.span`
  font-size: ${({ theme }: ThemeProps) => theme.orbit.spaceSmall};
  padding-left: ${({ theme }: ThemeProps) => theme.orbit.spaceXSmall};
`;

ItineraryTripTime.defaultProps = {
  theme: themeDefault,
};

const ItineraryTripTitleWrapper = styled.div`
  padding-top: ${({ theme }: ThemeProps) => theme.orbit.spaceLarge};
  margin-bottom: ${({ theme }: ThemeProps) => theme.orbit.spaceMedium};
`;

ItineraryTripTitleWrapper.defaultProps = {
  theme: themeDefault,
};

const ItineraryTripTitle = ({ trip }: Props) => {
  const firstPart = trip[0];
  const lastPart = trip[trip.length - 1];

  const departureName = firstPart.departure.where.name;
  const arrivalName = lastPart.arrival.where.name;
  const duration = getPartsDuration(trip);

  return (
    <ItineraryTripTitleWrapper>
      <ItineraryTripLabel tripIndex={firstPart.tripIndex}>
        <Stack align="center" spacing="compact">
          <span>{departureName}</span>
          <FlightDirectIcon />
          <span>{arrivalName}</span>
        </Stack>
      </ItineraryTripLabel>
      <ItineraryTripTime>
        <TranslateNode
          t="common.duration"
          values={{
            duration: <Time time={new Date(duration)} />,
          }}
        />
      </ItineraryTripTime>
    </ItineraryTripTitleWrapper>
  );
};

export default ItineraryTripTitle;
