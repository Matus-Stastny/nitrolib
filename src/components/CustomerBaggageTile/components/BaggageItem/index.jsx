// @flow strict
import * as React from "react";
import styled, { css } from "styled-components";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery";

import type { TileItem, OrderStatusType } from "../../../../records/Baggage.js.flow";
import {
  getIconFromCategory,
  getTextFromCategory,
  getBaggageSize,
} from "../../../../services/baggage/utils";
import { themeDefault } from "../../../../records/Theme";
import type { ThemeProps } from "../../../../records/Theme";

const BaggageRestrictionsWrapper = styled.div`
  display: none;

  ${mq.mediumMobile(css`
    display: flex;
    width: 80%;
  `)};
  ${mq.largeMobile(css`
    display: flex;
    width: 100%;
  `)};
`;
type BaggageRestrictionsProps = ThemeProps & {
  isMobile: boolean,
};

const BaggageRestrictions = styled.span`
  display: ${({ isMobile }: BaggageRestrictionsProps) => (isMobile ? "inline-block" : "none")};
  padding-left: ${({ isMobile }: BaggageRestrictionsProps) => (isMobile ? "24px" : "0px")};
  color: ${({ theme }): ThemeProps => theme.orbit.colorTextSecondary};
  font-size: ${({ theme, isMobile }: BaggageRestrictionsProps) =>
    isMobile ? theme.orbit.fontSizeTextNormal : "inherit"};
  font-family: ${({ theme }): ThemeProps => theme.orbit.fontFamily};

  ${mq.mediumMobile(css`
    display: ${({ isMobile }: BaggageRestrictionsProps) => (isMobile ? "none" : "block")};
  `)};
`;

BaggageRestrictions.defaultProps = {
  theme: themeDefault,
  isMobile: false,
};

const Wrapper = styled.div.attrs({
  "data-test": "CustomerBaggageTile-BaggageItem",
})`
  width: 100%;
  display: flex;
  align-items: center;
`;

type BaggageItemType = TileItem & {
  isCurrent?: boolean,
  orderStatus: ?OrderStatusType,
};

const BaggageItem = ({ category, restrictions, isCurrent, orderStatus }: BaggageItemType) => {
  const textWeight =
    isCurrent || orderStatus === null || orderStatus === "notAvailable" ? "normal" : "bold";
  return (
    <Wrapper>
      <Stack shrink spacing="tight" direction="column">
        <Stack grow flex align="center" spacing="condensed">
          {getIconFromCategory(category, "small", "primary")}
          <Text element="span" weight={textWeight}>
            {`${restrictions.weight}kg `}
            {getTextFromCategory(category)}
          </Text>
        </Stack>
        <BaggageRestrictions isMobile>{getBaggageSize(restrictions)}</BaggageRestrictions>
      </Stack>
      <BaggageRestrictionsWrapper shrink>
        <BaggageRestrictions>{getBaggageSize(restrictions)}</BaggageRestrictions>
      </BaggageRestrictionsWrapper>
    </Wrapper>
  );
};

export default BaggageItem;
