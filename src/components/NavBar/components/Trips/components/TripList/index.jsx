// @flow strict
import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import styled from "styled-components";

import Translate from "../../../../../Translate";
import type { TripList_list } from "./__generated__/TripList_list.graphql";
import { Consumer as IntlConsumer } from "../../../../../../services/intl/context";
import OneWayTrips from "../OneWayTrips";
import MulticityTrips from "../MulticityTrips";
import TripListBottom from "../TripListBottom";
import BottomTripItem from "../BottomTripItem";
import { themeDefault } from "../../../../../../records/Theme";
import type { ThemeProps } from "../../../../../../records/Theme";
import ReturnTrips from "../ReturnTrips";

const Paddings = styled.div`
  padding: ${({ theme }: ThemeProps) => theme.orbit.spaceSmall};
`;

Paddings.defaultProps = {
  theme: themeDefault,
};

type Props = {|
  list: TripList_list,
  onSelect: (bid: string) => void,
|};

const TripList = ({ list, onSelect }: Props) => {
  const trips = list.edges && list.edges.map(edge => edge && edge.node).filter(Boolean);
  const upcoming = trips && trips.filter(trip => trip && !trip.isPastBooking && trip);
  const firstTwo = upcoming && upcoming.slice(0, 2);
  const futureTrips = upcoming && upcoming.slice(2, 6);

  if (upcoming && upcoming.length === 0) {
    return (
      <Paddings>
        <Translate t="account.no_trips" />
      </Paddings>
    );
  }

  return (
    <>
      {firstTwo &&
        firstTwo.map(item => {
          /* eslint-disable no-underscore-dangle */
          if (item.__typename === "BookingOneWay") {
            /* $FlowExpected: TODO describe */
            return <OneWayTrips key={item.id} item={item} onSelect={onSelect} />;
          }
          if (item.__typename === "BookingReturn") {
            /* $FlowExpected: TODO describe */
            return <ReturnTrips key={item.id} item={item} onSelect={onSelect} />;
          }
          if (item.__typename === "BookingMulticity") {
            /* $FlowExpected: TODO describe */
            return <MulticityTrips key={item.id} item={item} onSelect={onSelect} />;
          }
          /* eslint-enable no-underscore-danble */

          return null;
        })}

      {futureTrips && futureTrips.length > 0 && (
        <TripListBottom>
          <IntlConsumer>
            {({ language }) =>
              futureTrips &&
              futureTrips.map(item => (
                <BottomTripItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.destinationImageUrl || ""}
                  lang={language.id}
                />
              ))
            }
          </IntlConsumer>
        </TripListBottom>
      )}
    </>
  );
};

export const TripListUnwrapped = TripList;

export default createFragmentContainer(
  TripList,
  graphql`
    fragment TripList_list on BookingInterfaceConnection {
      edges {
        node {
          __typename
          id
          isPastBooking
          destinationImageUrl
          ...OneWayTrips_item
          ...MulticityTrips_item
          ...ReturnTrips_item
        }
      }
    }
  `,
);
