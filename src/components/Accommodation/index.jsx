// @flow strict

import * as React from "react";
import styled, { css } from "styled-components";
import AccommodationIcon from "@kiwicom/orbit-components/lib/icons/Accommodation";
import Separator from "@kiwicom/orbit-components/lib/Separator";
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery";

import HotelInfo from "../HotelInfo";
import Rooms from "../Rooms";
import Header from "./components/Header";
import AccommodationModal from "./components/AccommodationModal";
import { themeDefault } from "../../records/Theme";
import type { RoomType } from "../../records/Room";
import type { ThemeProps } from "../../records/Theme";

export type Props = {|
  hotelName: string,
  rating: number,
  location: {|
    latitude: number,
    longitude: number,
  |},
  address: string,
  photoUrl: string,
  rooms: Array<RoomType>,
  mapboxToken: string,
  zoom?: number,
  isMMB: boolean,
|};

const Wrapper = styled.div`
  margin-bottom: ${({ theme }: ThemeProps) => theme.orbit.spaceMedium};
  padding: ${({ theme }: ThemeProps) => theme.orbit.spaceLarge}
    ${({ theme }: ThemeProps) => theme.orbit.spaceSmall};
  background: ${({ theme }: ThemeProps) => theme.orbit.paletteWhite};
  border-width: ${({ theme }: ThemeProps) => theme.orbit.borderWidthCard};
  border-style: ${({ theme }: ThemeProps) => theme.orbit.borderStyleCard};
  border-color: ${({ theme }: ThemeProps) => theme.orbit.borderColorCard};
  border-radius: ${({ theme }: ThemeProps) => theme.orbit.borderRadiusNormal};
  box-shadow: ${({ theme }: ThemeProps) => theme.orbit.boxShadowElevatedLevel1};

  ${mq.tablet(css`
    padding: ${({ theme }: ThemeProps) => theme.orbit.spaceLarge};
  `)};
`;

Wrapper.defaultProps = {
  theme: themeDefault,
};

const ContentWrapper = styled.div`
  ${mq.largeMobile(css`
    display: flex;
  `)};
`;

const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin-bottom: ${({ theme }: ThemeProps) => theme.orbit.spaceMedium};
  overflow: hidden;

  ${mq.largeMobile(css`
    flex-basis: 160px;
    flex-shrink: 0;
    height: 162px;
    margin-right: ${({ theme }: ThemeProps) => theme.orbit.spaceLarge};
  `)};
`;

Photo.defaultProps = {
  theme: themeDefault,
};

const Img = styled.img`
  width: 100%;

  ${mq.largeMobile(css`
    height: 100%;
    width: auto;
  `)};
`;

function Accommodation(props: Props) {
  // not sure how to flow-type hooks yet, feel free to suggest
  const [isModalOpen, toggleModal] = React.useState(false);
  const toggleAccommodationModal = openState => () => toggleModal(openState);

  const { photoUrl, hotelName, rating, address, location, rooms, isMMB, mapboxToken, zoom } = props;
  return (
    <Wrapper>
      <Header icon={<AccommodationIcon />} t="holidays.accommodation.title" />
      <ContentWrapper>
        <Photo>
          <Img src={photoUrl} alt="hotel" />
        </Photo>
        <div>
          <HotelInfo
            hotel={{ hotelName, rating, address, isMMB }}
            onShownOnMapClick={toggleAccommodationModal}
          />
          <Separator />
          <Rooms rooms={rooms} />
        </div>
      </ContentWrapper>
      {isModalOpen && (
        <AccommodationModal
          location={{ ...location, hotelName, mapboxToken, address, zoom }}
          onClose={toggleAccommodationModal}
        />
      )}
    </Wrapper>
  );
}

export default Accommodation;
