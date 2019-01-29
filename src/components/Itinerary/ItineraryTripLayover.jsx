// @flow strict
import * as React from "react";
import styled from "styled-components";
import Text from "@kiwicom/orbit-components/lib/Text";

import type { ItineraryPlace } from "../../records/Itinerary";
import Translate from "../Translate";
import { themeDefault } from "../../records/Theme";
import type { ThemeProps } from "../../records/Theme";

type Props = {
  layover: any, // TODO: fix layover type
};

export const getPlaceNameAndCode = (place: ItineraryPlace) =>
  `${place.name}\u00a0(${place.code})${
    /[a-zA-Z]+/.test(place.name) // latin strings have problem with closing parentheses in rtl languages, so we have to add ltr marker
      ? "\u200e"
      : ""
  }`;

// TODO: fix layover type
export const getLayoverTranslateProps = (layover: any, journeyType: string = "") => {
  const place = layover.place.name;
  const nights = layover.nightsInDestination;

  if (layover.switchToPlace) {
    const changePlace = getPlaceNameAndCode(layover.switchToPlace);
    switch (nights) {
      case 0:
        return { t: __("result.same_day_return_and_change_to"), values: { place, changePlace } };

      case 1:
        return {
          t: __("result.night_in_destination_and_change_to"),
          values: { place, changePlace },
        };

      default:
        return {
          t: __("result.nights_in_destination_and_change_to"),
          values: { nights, place, changePlace },
        };
    }
  } else {
    switch (nights) {
      case 0: {
        const t =
          journeyType === "multicity"
            ? __("result.same_day_departure")
            : __("result.same_day_return");
        return { t, values: { place } };
      }
      case 1:
        return { t: __("result.night_in_destination"), values: { place } };

      default:
        return { t: __("result.nights_in_destination"), values: { nights, place } };
    }
  }
};

const ItineraryTripLayoverNights = styled.div`
  padding: 9px 0 8px 36px;
  font-size: ${({ theme }: ThemeProps) => theme.orbit.fontSizeTextSmall};
`;

ItineraryTripLayoverNights.defaultProps = {
  theme: themeDefault,
};

const ItineraryTripLayover = ({ layover }: Props) => {
  if (!layover) {
    return null;
  }

  return (
    <ItineraryTripLayoverNights>
      <Text type="secondary" size="small">
        <Translate {...getLayoverTranslateProps(layover /* FIXME: , journeyType */)} />
      </Text>
    </ItineraryTripLayoverNights>
  );
};

export default ItineraryTripLayover;
