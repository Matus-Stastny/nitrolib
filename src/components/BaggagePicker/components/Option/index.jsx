// @flow
import * as React from "react";
import styled from "styled-components";
import R from "ramda";
import BaggagePersonalItemNone from "@kiwicom/orbit-components/lib/icons/BaggagePersonalItemNone";
import PriorityBoarding from "@kiwicom/orbit-components/lib/icons/PriorityBoarding";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Text from "@kiwicom/orbit-components/lib/Text";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Radio from "@kiwicom/orbit-components/lib/Radio";
import Close from "@kiwicom/orbit-components/lib/icons/Close";
import Alert from "@kiwicom/orbit-components/lib/Alert";

import Translate from "../../../Translate/index";
import OptionItem from "../OptionItem/index";
import { themeDefault } from "../../../../records/Theme";
import type { ThemeProps } from "../../../../records/Theme";
import type { PriceType, ItemType } from "../../../../records/Baggage";
import { Consumer } from "../../services/context";
import { Consumer as IntlConsumer } from "../../../../services/intl/context";

type Props = {
  items: { [key: string]: ItemType },
  price: PriceType,
  isChecked: boolean,
  onClick: () => void,
};

type OptionWrapperProps = ThemeProps & {
  checked: boolean,
};

const OptionWrapper = styled.div`
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: 0 1px 2px 0 ${({ theme }: ThemeProps) => theme.orbit.paletteWhiteHover};
  border: solid
    ${({ theme, checked }: OptionWrapperProps) =>
      checked
        ? `2px ${theme.orbit.colorTextButtonPrimaryBordered}`
        : `1px ${theme.orbit.borderColorCard}`};
  &:hover {
    border-width: 2px;
    border-color: ${({ theme }: ThemeProps) => theme.orbit.borderColorCheckboxRadioHover};
    cursor: pointer;
    span {
      border-width: 4px;
      border-color: ${({ theme }: ThemeProps) => theme.orbit.borderColorCheckboxRadioHover};
    }
  }

  > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;

OptionWrapper.defaultProps = {
  theme: themeDefault,
  checked: false,
};

const RadioWrapper = styled.div`
  width: 20px;
  div {
    margin-top: 2px;
  }
`;

const IconWrapper = styled.div`
  border-top: 1px solid ${({ theme }: ThemeProps) => theme.orbit.borderColorInput};
  width: 22px;
  text-align: center;
`;

IconWrapper.defaultProps = {
  theme: themeDefault,
};

const PriorityBoardingInfo = ({ airlines }: { airlines: Array<string> }) => {
  const arrToHumanString = (arr: Array<string>, conjunction): string => {
    if (arr.length === 1) return arr[0];
    const firsts = arr.slice(0, -1);
    const last = arr.slice(-1)[0];
    return `${firsts.join(", ")} ${conjunction} ${last}`;
  };
  return (
    <Stack flex direction="row" spacing="condensed" align="center">
      <IconWrapper>
        <PriorityBoarding color="secondary" size="small" />
      </IconWrapper>
      <Text size="small" element="p">
        <IntlConsumer>
          {({ translate }) => (
            <Translate
              t="common.baggage.priority_boarding"
              values={{ airlines: arrToHumanString(airlines, translate(__("common.baggage.and"))) }}
            />
          )}
        </IntlConsumer>
        <TextLink external={false} onClick={() => {}} href="https://kiwi.com" type="secondary">
          <Translate t="common.baggage.learn_more" />
        </TextLink>
      </Text>
    </Stack>
  );
};

const EmptyLabel = () => (
  <Stack spacing="condensed" flex align="center">
    <Close size="medium" />
    <Text>
      <Translate t="common.baggage.no_checked_baggage" />
    </Text>
  </Stack>
);

const Option = ({ items, price, isChecked, onClick }: Props) => {
  const itemsArr = Object.keys(items).map(key => items[key]);
  const hasSingleItem = itemsArr.length === 1;
  const firstItem = itemsArr[0];

  const getAirlinesWithPriorityBoarding = itemsArray => {
    const airlines = itemsArray.reduce((acc, item) => {
      if (item.conditions && item.conditions.isPriority) {
        return [...acc, ...item.conditions.isPriority];
      }
      return acc;
    }, []);
    return R.uniq(airlines);
  };

  return (
    <Consumer>
      {({ airlines, shouldShowRecheckNote }) => {
        const priorityAirlinesKeys = getAirlinesWithPriorityBoarding(itemsArr);
        const priorityAirlines = priorityAirlinesKeys
          .map(key => airlines && airlines[key] && airlines[key].name)
          .filter(Boolean);

        return (
          <OptionWrapper onClick={onClick} checked={isChecked}>
            <Stack flex>
              <RadioWrapper>
                <Radio checked={isChecked} onChange={onClick} />
              </RadioWrapper>
              <Stack shrink flex spacing="extraTight" direction="column">
                {itemsArr.length > 0 ? (
                  itemsArr.map((item, index) => (
                    <OptionItem
                      key={index} // eslint-disable-line
                      amount={item.amount}
                      restrictions={item.restrictions}
                      category={item.category}
                      firstItem={item === itemsArr[0]}
                      price={price}
                    />
                  ))
                ) : (
                  <EmptyLabel />
                )}
                {hasSingleItem && firstItem.category === "cabinBag" && (
                  <Stack flex align="center" spacing="tight">
                    <BaggagePersonalItemNone color={isChecked ? "warning" : "secondary"} />
                    <Text type={isChecked ? "warning" : "secondary"}>
                      <Translate t="common.baggage.no_personal_item" />
                    </Text>
                  </Stack>
                )}
                {priorityAirlines.length > 0 && (
                  <PriorityBoardingInfo airlines={priorityAirlines} />
                )}
              </Stack>
            </Stack>
            {shouldShowRecheckNote && firstItem && firstItem.category === "holdBag" && isChecked && (
              <Alert>
                <Translate t="common.baggage.alert.collect_and_recheck" />
              </Alert>
            )}
          </OptionWrapper>
        );
      }}
    </Consumer>
  );
};

export default Option;
