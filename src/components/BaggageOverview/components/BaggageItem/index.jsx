// @flow strict
import * as React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import styled from "styled-components";
import AccountCircle from "@kiwicom/orbit-components/lib/icons/AccountCircle";
import Hide from "@kiwicom/orbit-components/lib/Hide";

import Translate from "../../../Translate";
import type {
  BaggageSubCategory,
  Restrictions,
  BaggagePassengerType,
  OverviewContextType,
  FAQLinksHandlerType,
} from "../../../../records/Baggage";
import getBaggageSize from "../../../../services/baggage/getBaggageSize";
import getIconFromCategory from "../../../../services/baggage/getIconFromCategory";
import getTextFromCategory from "../../../../services/baggage/getTextFromCategory";
import getPassengerNames from "./services/getPassengerNames";

const Title = styled.div`
  line-height: 24px;
`;

type Props = {|
  restrictions: Restrictions,
  category: BaggageSubCategory,
  amount: number,
  passengers?: BaggagePassengerType[],
  FAQLinksHandler?: FAQLinksHandlerType,
  context: OverviewContextType,
|};

const BaggageItem = ({
  passengers,
  category,
  context,
  amount,
  restrictions,
  FAQLinksHandler,
}: Props) => {
  return (
    <Stack
      flex
      align="start"
      spaceAfter="large"
      direction="column"
      spacing="tight"
      mediumMobile={{ direction: "row", spaceAfter: "smallest", align: "center" }}
      dataTest={`BaggageOverview-BaggageItem-${category}`}
    >
      <Stack shrink spacing="condensed" spaceAfter="smallest">
        {getIconFromCategory(category, "medium", "primary")}
        <Stack
          flex
          shrink
          align="start"
          spacing="none"
          direction="column"
          mediumMobile={{ align: "start", direction: "column" }}
          largeMobile={{ direction: "row", spacing: "condensed", align: "center" }}
        >
          <Text
            element="p"
            weight={context === "MMB-PassengersSummary" ? "bold" : "normal"}
            size={context === "MMB-PassengersSummary" ? "large" : "normal"}
          >
            {`${amount}× `}
            {category === "holdBag" && `${restrictions.weight}kg `}
            {getTextFromCategory(category, x => x.toLowerCase())}
          </Text>
          <Text
            element="p"
            type="secondary"
            size={context === "MMB-PassengersSummary" ? "normal" : "small"}
          >
            <Title>{getBaggageSize(restrictions)}</Title>
          </Text>

          {FAQLinksHandler && (
            <Hide on={["largeMobile", "tablet", "desktop", "largeDesktop"]}>
              <Stack
                flex
                shrink
                align="center"
                mediumMobile={{ justify: "end" }}
                spaceAfter="large"
              >
                <TextLink size="small" onClick={() => FAQLinksHandler(category)}>
                  <Translate t="baggage_modal.summary.more_info" />
                </TextLink>
              </Stack>
            </Hide>
          )}
        </Stack>
      </Stack>

      {(FAQLinksHandler || !!passengers) && (
        <Stack
          flex
          shrink
          align="center"
          justify="start"
          spacing="compact"
          mediumMobile={{ justify: FAQLinksHandler ? "end" : "start", shrink: true }}
        >
          {passengers && (
            <>
              <AccountCircle size="small" color="secondary" />
              <Text
                element="span"
                type="secondary"
                dataTest="BaggageOverview-BaggageItem-Passengers"
              >
                {getPassengerNames(passengers)}
              </Text>
            </>
          )}

          {FAQLinksHandler && (
            <Hide on={["smallMobile", "mediumMobile"]}>
              <Stack
                flex
                shrink
                align="center"
                mediumMobile={{ justify: "end" }}
                spaceAfter="large"
              >
                <TextLink size="small" onClick={() => FAQLinksHandler(category)}>
                  <Translate t="baggage_modal.summary.more_info" />
                </TextLink>
              </Stack>
            </Hide>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default BaggageItem;
