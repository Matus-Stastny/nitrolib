// @flow strict
import * as React from "react";

import { Consumer as CurrencyConsumer } from "../../services/currency/context";
import NativePicker from "./NativePicker";
import CustomPicker from "../CustomPicker";
import { currencyDefault, getAvailableList } from "../../records/Currency";
import Current from "./components/Current";
import Menu from "./components/Menu";
import LogMount from "../LogMount";

type Props = {|
  native: boolean,
  loading: React.Node,
  positionMenuTablet?: number,
  positionMenuDesktop?: number,
|};

const Currency = ({ native, loading, positionMenuDesktop, positionMenuTablet }: Props) => (
  <CurrencyConsumer>
    {({ currency, available, recommended, onChange }) => {
      if (currency === currencyDefault) {
        return loading;
      }

      const availableList = getAvailableList(available);

      return (
        <>
          <LogMount event={{ event: "openCurrency", data: null }} />
          {native ? (
            <NativePicker
              current={currency}
              available={availableList}
              recommended={recommended}
              onChange={onChange}
            />
          ) : (
            <CustomPicker onChange={onChange} openButton={<Current current={currency} />}>
              {render => (
                <Menu
                  onChange={render.onChange}
                  current={currency}
                  available={availableList}
                  recommended={recommended}
                  positionMenuDesktop={positionMenuDesktop}
                  positionMenuTablet={positionMenuTablet}
                />
              )}
            </CustomPicker>
          )}
        </>
      );
    }}
  </CurrencyConsumer>
);

Currency.defaultProps = {
  native: false,
  loading: null,
};

export default Currency;
