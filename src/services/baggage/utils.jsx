// @flow
import * as React from "react";
import BaggageChecked from "@kiwicom/orbit-components/lib/icons/BaggageChecked";
import BaggagePersonalItem from "@kiwicom/orbit-components/lib/icons/BaggagePersonalItem";
import BaggageCabin from "@kiwicom/orbit-components/lib/icons/BaggageCabin";

import type { BaggageSubCategory } from "../../records/Baggage";
import Translate from "../../components/Translate/index";

type IconSize = "small" | "medium" | "large";
type IconColor =
  | "attention"
  | "primary"
  | "secondary"
  | "tertiary"
  | "info"
  | "success"
  | "warning"
  | "critical";

export const getTextFromCategory = (
  category: BaggageSubCategory,
  transform?: (value: string) => string,
) => {
  switch (category) {
    case "personalItem":
      return <Translate t="common.baggage.personal_item" />;
    case "cabinBag":
      return <Translate t="common.baggage.cabin_bag" />;
    case "holdBag":
      return <Translate t="common.baggage.checked_bag" transform={transform} />;
    default:
      return undefined;
  }
};

export const getIconFromCategory = (
  category: BaggageSubCategory,
  size: IconSize,
  color: IconColor,
) => {
  switch (category) {
    case "personalItem":
      return <BaggagePersonalItem size={size} color={color} />;
    case "cabinBag":
      return <BaggageCabin size={size} color={color} />;
    case "holdBag":
      return <BaggageChecked size={size} color={color} />;
    default:
      return undefined;
  }
};
