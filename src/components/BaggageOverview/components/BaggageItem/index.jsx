// @flow
import * as React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import styled, { css } from "styled-components";
import AccountCircle from "@kiwicom/orbit-components/lib/icons/AccountCircle";

import mq from "../../../../styles/mq";
import { themeDefault } from "../../../../records/Theme";
import type { ThemeProps } from "../../../../records/Theme";
import type { BaggageSubCategory, Restrictions } from "../../../../records/Baggage";
import { getTextFromCategory, getIconFromCategory } from "../../../../services/baggage/utils";

const Wrapper = styled.div`
  display: flex;

  ${mq.ltMiddleMobile(css`
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  `)};
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: flex-start;
  align-items: center;

  ${mq.ltBigMobile(css`
    flex-direction: column;
    align-items: flex-start;
  `)};
  ${mq.ltMiddleMobile(css`
    flex-direction: row;
    align-items: flex-start;
  `)};

  > * {
    margin-right: ${({ theme }): ThemeProps => theme.orbit.spaceXSmall};
  }
`;

TextWrapper.defaultProps = {
  theme: themeDefault,
};

const Title = styled.span`
  line-height: 24px;
`;

const PassengersWrapper = styled.div`
  display: flex;
  width: 100%;
  line-height: 24px;
  align-items: center;
  svg {
    margin-right: ${({ theme }): ThemeProps => theme.orbit.spaceXSmall};
  }
  ${mq.ltMiddleMobile(css`
    svg {
      /* fix of different icon sizing */
      margin-left: 3px;
      margin-right: 11px;
    }
  `)};
`;
PassengersWrapper.defaultProps = {
  theme: themeDefault,
};

type Props = {
  passengers: Array<{ lastName: string, firstName: string, id: number }>,
  restrictions: Restrictions,
  category: BaggageSubCategory,
  amount: number,
  isPassengersShowed: boolean,
};

const BaggageItem = ({ passengers, category, amount, restrictions, isPassengersShowed }: Props) => {
  const getBaggageSize = ({ height, length, weight, width }) =>
    `${length} x ${width} x ${height} cm, ${weight} kg`;

  const getPassengerNames = passengersArr =>
    passengersArr.map(p => `${p.firstName[0]}. ${p.lastName}`).join(", ");

  return (
    <Wrapper>
      <Stack shrink spacing="condensed">
        {getIconFromCategory(category, "medium", "primary")}
        <TextWrapper>
          <Text element="p">
            <Title>
              {`${amount}x `}
              {category === "holdBag" && `${restrictions.weight}kg  `}
              {getTextFromCategory(category, x => x.toLowerCase())}
            </Title>
          </Text>
          <Title>
            <Text element="span" type="secondary" size="small">
              {getBaggageSize(restrictions)}
            </Text>
          </Title>
        </TextWrapper>
      </Stack>
      {isPassengersShowed && (
        <PassengersWrapper>
          <AccountCircle size="small" color="secondary" />
          <Text element="span" type="secondary">
            {getPassengerNames(passengers)}
          </Text>
        </PassengersWrapper>
      )}
    </Wrapper>
  );
};

export default BaggageItem;
