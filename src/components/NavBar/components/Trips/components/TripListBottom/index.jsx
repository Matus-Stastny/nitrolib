// @flow strict
import * as React from "react";

import ItemWrapper from "../../primitives/ItemWrapper";
import Text from "../../../../../Text";
import { Consumer as IntlConsumer } from "../../../../../../services/intl/context";
import Button from "../../../../primitives/Button";

type Props = {|
  children: React.Node,
|};

const TripListBottom = ({ children }: Props) => (
  <IntlConsumer>
    {intl => (
      <>
        <ItemWrapper>
          {children}
          <Button href={`/${intl.language.id}/account#future`}>
            <Text t={__("account.all_trips")} />
          </Button>
        </ItemWrapper>
      </>
    )}
  </IntlConsumer>
);

export default TripListBottom;
