// @flow

export type BaggageCategory = "holdBag" | "handBag";
export type BaggageSubCategory = "holdBag" | "personalItem" | "cabinBag";
export type PassengerGroup = "adult" | "child" | "infant";

export type Price = {
  currency: string,
  amount: number,
  base: number,
  merchant?: ?string,
  service: number,
  serviceFlat: number,
};

export type Restrictions = {|
  weight: number,
  height: number,
  width: number,
  length: number,
  dimensionsSum: ?number,
|};

export type Definition<C: BaggageSubCategory> = {
  category: C,
  price: Price,
  restrictions: Restrictions,
  conditions: {
    isPriority?: Array<string>,
    passengerGroups: Array<PassengerGroup>,
  },
};

export type HandBagDefinition = Definition<"personalItem" | "cabinBag">;
export type HoldBagDefinition = Definition<"holdBag">;

export type Definitions = {|
  handBag: Array<HandBagDefinition>,
  holdBag: Array<HoldBagDefinition>,
|};

export type Combination = {|
  indices: Array<number>,
  price: Price,
  conditions: {
    passengerGroups: Array<PassengerGroup>,
  },
|};

export type Combinations = {|
  handBag: Array<Combination>,
  holdBag: Array<Combination>,
|};

export type BaggageType = {
  definitions: Definitions,
  combinations: Combinations,
};

export type Item = {
  amount: number,
  category: BaggageSubCategory,
  restrictions: Restrictions,
  conditions: {
    isPriority?: Array<string>,
    passengerGroups: Array<PassengerGroup>,
  },
};

export type OptionBaggage = {
  originalIndex: number,
  pickerType: BaggageCategory,
  price: Price,
  items: { [key: string]: Item },
};
