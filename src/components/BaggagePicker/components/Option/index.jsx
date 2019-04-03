// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import R from "ramda";
import BaggagePersonalItemNone from "@kiwicom/orbit-components/lib/icons/BaggagePersonalItemNone";
import Text from "@kiwicom/orbit-components/lib/Text";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Radio from "@kiwicom/orbit-components/lib/Radio";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery";

import PriorityBoardingInfo from "./components/PriorityBoardingInfo";
import EmptyLabel from "./components/EmptyLabel";
import Translate from "../../../Translate/index";
import OptionItem from "../OptionItem/index";
import { themeDefault } from "../../../../records/Theme";
import type { ThemeProps } from "../../../../records/Theme";
import type { ItemType, BaggageCategory } from "../../../../records/Baggage.js.flow";
import type { PriceType } from "../../../../records/Price.js.flow";
import { Consumer } from "../../services/context";

type Props = {
  items: { [key: string]: ItemType },
  price: PriceType,
  dataTest?: string,
  isChecked: boolean,
  isCurrentCombination: boolean,
  onClick: () => void,
  pickerType: BaggageCategory,
  isPersonalItemPresent: boolean,
};

type OptionWrapperProps = ThemeProps & {
  checked: boolean,
  dataTest: string,
};

const OptionWrapper = styled.div.attrs({
  "data-test": ({ dataTest }) => dataTest,
})`
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  box-shadow: 0 1px 2px 0 ${({ theme }: ThemeProps) => theme.orbit.paletteWhiteHover};
  border: solid 2px
    ${({ theme, checked }: OptionWrapperProps) =>
      checked ? `${theme.orbit.colorTextButtonPrimaryBordered}` : `${theme.orbit.borderColorCard}`};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  outline: solid 1px white;
  outline-offset: ${({ checked }) => (checked ? "-3px" : "-2px")};
  &:hover {
    cursor: pointer;
    border-color: ${({ theme }: ThemeProps) => theme.orbit.borderColorCheckboxRadioHover};
    outline-offset: -3px;
    /* div { slylelint no-descending-specificity
      border-color: ${({ theme }: ThemeProps) => theme.orbit.borderColorCheckboxRadioHover};
    } */
  }

  > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;

OptionWrapper.defaultProps = {
  dataTest: "BaggagePicker-Option",
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
  min-width: 24px;
  text-align: center;
  padding: 6px 0px;

  ${mq.largeMobile(css`
    padding: 4px 0px;
  `)};
`;

IconWrapper.defaultProps = {
  theme: themeDefault,
};

const Option = ({
  items,
  price,
  dataTest,
  isChecked,
  onClick,
  isCurrentCombination,
  pickerType,
  isPersonalItemPresent,
}: Props) => {
  const itemsArr = R.values(items);
  const firstItem = R.head(itemsArr);

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
      {({ airlines, shouldShowRecheckNote, prioBoardingLinkHandler }) => {
        const priorityAirlines = getAirlinesWithPriorityBoarding(itemsArr)
          .map((key: string) => airlines?.[key])
          .filter(Boolean);

        return (
          <OptionWrapper onClick={onClick} checked={isChecked} dataTest={dataTest}>
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
                      isFirstItem={index === 0}
                      price={price}
                      isCurrentCombination={isCurrentCombination}
                    />
                  ))
                ) : (
                  <EmptyLabel pickerType={pickerType} isCurrentCombination={isCurrentCombination} />
                )}
                {firstItem?.category === "cabinBag" && isPersonalItemPresent && (
                  <Stack
                    flex
                    align="center"
                    spacing="tight"
                    dataTest="BaggagePicker-NoPersonalItemLabel"
                  >
                    <BaggagePersonalItemNone color={isChecked ? "warning" : "secondary"} />
                    <Text type={isChecked ? "warning" : "secondary"}>
                      <Translate t="baggage_modal.select.no_personal_item" />
                    </Text>
                  </Stack>
                )}
                {priorityAirlines.length > 0 && (
                  <PriorityBoardingInfo
                    airlines={priorityAirlines}
                    prioBoardingLinkHandler={prioBoardingLinkHandler}
                  />
                )}
              </Stack>
            </Stack>
            {shouldShowRecheckNote && firstItem?.category === "holdBag" && isChecked && (
              <Alert dataTest="BaggagePicker-RecheckAlert">
                <Translate t="baggage_modal.alert.collect_and_recheck" />
              </Alert>
            )}
          </OptionWrapper>
        );
      }}
    </Consumer>
  );
};

export default Option;
