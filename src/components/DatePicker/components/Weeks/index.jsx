// @flow strict
import * as React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";

import DayFormat from "../../../Day/index";
import DayWrapper from "../../primitives/Day";
import { getWeekDays } from "../../services/getMonthDays";

type Props = {|
  value: Date,
|};

const Weeks = ({ value }: Props): React.Node => (
  <Stack align="center" justify="between" spacing="extraTight" spaceAfter="medium">
    {getWeekDays(value).map(weekDay => (
      <DayWrapper key={weekDay} disabled>
        <Text size="small">
          <DayFormat format="iii" date={weekDay} />
        </Text>
      </DayWrapper>
    ))}
  </Stack>
);

export default Weeks;
