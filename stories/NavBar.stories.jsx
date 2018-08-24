// @flow strict
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import NavBar from "../src/components/NavBar";
import HeaderLinks from "../src/components/HeaderLinks";
import withData from "./decorators/withData";

storiesOf("NavBar", module)
  .addDecorator(withData)
  .add("default", () => (
    <NavBar
      chat={<h1>Chat</h1>}
      subscription={<h1>Subscription</h1>}
      debug={<h1>Debug</h1>}
      onSaveLanguage={action("Save language")}
      onSaveToken={action("Save token")}
      headerLinks={
        <HeaderLinks
          linkFlights="https://www.kiwi.com/en/?headerLink=linkFlights"
          linkRooms="https://www.kiwi.com/en/?headerLink=linkRooms"
          linkCars="https://www.kiwi.com/en/?headerLink=linkCars"
          linkHolidays="https://www.kiwi.com/en/?headerLink=linkHolidays"
        />
      }
    />
  ));
