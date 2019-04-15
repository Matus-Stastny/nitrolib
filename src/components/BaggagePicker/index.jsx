// @flow strict
import React, { useState, useEffect } from "react";
import * as R from "ramda";
import styled from "styled-components";
import Text from "@kiwicom/orbit-components/lib/Text";
import Button from "@kiwicom/orbit-components/lib/Button";
import InformationCircle from "@kiwicom/orbit-components/lib/icons/InformationCircle";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import Close from "@kiwicom/orbit-components/lib/icons/Close";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";

import Translate from "../Translate/index";
import { themeDefault } from "../../records/Theme";
import type { ThemeProps } from "../../records/Theme";
import Flex from "../../primitives/Flex";
import Option from "./components/Option/index";
import type { BaggageCategory, PassengerGroup, BaggageType } from "../../records/Baggage";
import type { Airline } from "../../records/Airline";
import getPersonalItemPresence from "./services/getPersonalItemPresence";
import getTooltip from "./services/getTooltip";
import getOptions from "./services/getOptions";

type Props = {|
  changeBagCombination: (BaggageCategory, number) => void,
  passengerCategory: PassengerGroup,
  passengerBaggage: { handBag: number, holdBag: number },
  baggage: BaggageType,
  shouldShowRecheckNote: boolean,
  airlines: { [string]: Airline },
  pickerType: BaggageCategory,
  context: "booking" | "mmb",
  currentCombination?: number,
  prioBoardingLinkHandler: (Airline[]) => void,
|};

const EmptyOption = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: 1px solid ${({ theme }: ThemeProps) => theme.orbit.borderColorCard};
  > svg,
  > p {
    margin-right: ${({ theme }: ThemeProps) => theme.orbit.spaceSmall};
  }
`;

EmptyOption.defaultProps = {
  theme: themeDefault,
};

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 16px;
  > p {
    margin-right: ${({ theme }) => theme.orbit.spaceXXSmall};
  }
  span {
    display: flex;
    align-items: center;
  }
`;

Title.defaultProps = {
  theme: themeDefault,
};

const BaggagePicker = ({
  changeBagCombination,
  pickerType,
  passengerBaggage,
  passengerCategory,
  shouldShowRecheckNote,
  prioBoardingLinkHandler,
  context,
  airlines,
  currentCombination,
  baggage,
}: Props) => {
  const [showedOptions, setShowedOptions] = useState([]);
  const [numberOfHiddenOptions, setNumberOfHiddenOptions] = useState(0);
  const [options] = useState(
    getOptions({
      baggage,
      passengerCategory,
      context,
      pickerType,
      currentCombination,
    }),
  );
  const hasOnlyEmptyOption = options.length === 1 && R.isEmpty(options[0].items);
  const isPersonalItemPresent = getPersonalItemPresence({ pickerType, options });

  useEffect(() => {
    function handleDefaultStateValues() {
      if (options.length > 4) {
        const optionsToShow = options.slice(0, 3);
        const hiddenOptionsLength = options.length - optionsToShow.length;
        setShowedOptions(optionsToShow);
        setNumberOfHiddenOptions(hiddenOptionsLength);
      } else {
        setShowedOptions(options);
        setNumberOfHiddenOptions(0);
      }
    }
    handleDefaultStateValues();
  }, [options, options.length]);

  const handleShowOptions = opts => {
    setShowedOptions(opts);
    setNumberOfHiddenOptions(0);
  };

  return (
    <Stack spacing="condensed" spaceAfter="largest" dataTest={`BaggagePicker-${pickerType}`}>
      <Title>
        <Text weight="bold" uppercase element="p">
          {pickerType === "handBag" ? (
            <Translate t="baggage_modal.subheader.cabin_baggage" />
          ) : (
            <Translate t="baggage_modal.subheader.checked_baggage" />
          )}
        </Text>
        <Tooltip content={getTooltip(pickerType)} preferredPosition="right" size="small">
          <InformationCircle size="small" color="secondary" />
        </Tooltip>
      </Title>
      {options.length > 0 && (
        <Text>
          {context === "booking" ? (
            <Translate t="baggage_modal.subheader.select_option" />
          ) : (
            <Translate t="baggage_modal.subheader.switch_option" />
          )}
          :
        </Text>
      )}
      {options.length > 0 && !hasOnlyEmptyOption ? (
        showedOptions.map((item, index) => (
          <Option
            key={item.originalIndex}
            airlines={airlines}
            dataTest={`BaggagePicker-Option-${index}`}
            pickerType={pickerType}
            items={item.items}
            price={item.price}
            isChecked={item.originalIndex === passengerBaggage[pickerType]}
            shouldShowRecheckNote={shouldShowRecheckNote}
            prioBoardingLinkHandler={prioBoardingLinkHandler}
            isCurrentCombination={item.originalIndex === currentCombination}
            onClick={() => changeBagCombination(pickerType, item.originalIndex)}
            isPersonalItemPresent={isPersonalItemPresent}
          />
        ))
      ) : (
        <EmptyOption data-test="BaggagePicker-EmptyOption">
          <Close size="medium" color="critical" />
          <Text element="p">
            {pickerType === "handBag" ? (
              <Translate t="baggage_modal.error.cabin_baggage_not_available" />
            ) : (
              <Translate t="baggage_modal.error.checked_baggage_not_available" />
            )}
          </Text>
        </EmptyOption>
      )}
      {numberOfHiddenOptions > 0 && (
        <Flex x="center">
          <Button
            dataTest="BaggagePicker-ShowButton"
            onClick={() => handleShowOptions(options)}
            size="small"
            type="secondary"
            icon={<ChevronDown />}
          >
            <Translate
              t="baggage_modal.select.show_more"
              values={{ number: numberOfHiddenOptions }}
            />
          </Button>
        </Flex>
      )}
    </Stack>
  );
};

export default BaggagePicker;
