// @flow strict
import * as React from "react";
import BaggageSet from "@kiwicom/orbit-components/lib/icons/BaggageSet";
import CardHeader from "@kiwicom/orbit-components/lib/Card/CardHeader";

import BaggagePicker from "../BaggagePicker";
import type { BaggageType, BaggageGroup } from "../../records/Baggage";

type Props = {
  passengerIndex: number,
  changeBagCombination: () => void,
  passengerCategory: BaggageGroup,
  passengerBaggage: { handBag: number, holdBag: number },
  baggage: BaggageType,
  shouldShowRecheckNote: boolean,
  selfTransferEnabled: boolean,
  selfTransferTooltip: string, // temp type
  disabledBagsInMmb: boolean,
  hasDubaiAirport: boolean,
  airlines: Array<*>,
};

class Baggage extends React.Component<Props> {
  getOptionItems = (definitions, combinations) =>
    combinations.reduce((acc, item) => {
      const key = item.toString();
      if (acc[key]) {
        acc[key].amount += 1;
      } else {
        acc[key] = {
          amount: 1,
          category: definitions[item].category,
          restrictions: definitions[item].restrictions,
          conditions: definitions[item].conditions,
        };
      }
      return acc;
    }, {});

  getBaggagePickerOptions = (type: string) => {
    const {
      baggage: { combinations, definitions },
      passengerCategory,
    } = this.props;

    const bagCombinations = combinations[passengerCategory][type];
    const bagDefinitions = definitions[type];

    const options = bagCombinations.map(c => ({
      originalIndex: c.originalIndex,
      bagType: type,
      price: c.price,
      items: this.getOptionItems(bagDefinitions, c.combination),
    }));

    return options;
  };

  render() {
    const handBagOptions = this.getBaggagePickerOptions("handBag");
    const holdBagOptions = this.getBaggagePickerOptions("holdBag");
    const {
      changeBagCombination,
      passengerBaggage: { handBag, holdBag },
    } = this.props;
    return (
      <>
        <CardHeader
          icon={<BaggageSet />}
          title="Baggage bundles"
          subTitle="Baggage options vary by carrier. We only offer bundles that are suitable for all your connections."
          dataTest="baggage-header"
        />
        <BaggagePicker
          title="Cabin baggage"
          tooltip="Includes smaller bags that can be taken into the cabin and stored in the overhead locker or under your seat."
          options={handBagOptions}
          selectedIndex={handBag}
          onChange={changeBagCombination}
        />
        <BaggagePicker
          title="Checked baggage"
          tooltip="Includes larger baggage items that you must deposit at the airline check-in counter before going through security at the airport."
          options={holdBagOptions}
          selectedIndex={holdBag}
          onChange={changeBagCombination}
        />
      </>
    );
  }
}

export default Baggage;
