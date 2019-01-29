// @flow strict
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

import Itinerary from "../src/components/Itinerary/index";
import ItineraryMock from "../src/components/Itinerary/services/__mocks__/ItineraryMock";

storiesOf("Itinerary", module)
  .addDecorator(withKnobs)
  .add("default", () => <Itinerary itinerary={ItineraryMock} />);
