// @flow
import * as React from "react";
import { graphql, QueryRenderer } from "react-relay";
import type { Environment } from "react-relay";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import styled from "styled-components";

import * as intlContext from "../../../../../../services/intl/context";
import Text from "../../../../../Text";
import TripHeader from "../TripHeader";
import TripList from "../TripList";
import TripContainer from "../../../../../TripsContainer";

type Props = {|
  // DI
  env: Environment,
|};

const StateContainer = styled.div`
  padding: 10px;
`;

const TripDataList = ({ env }: Props) => (
  <QueryRenderer
    environment={env}
    query={graphql`
      query TripDataListQuery {
        customerBookings {
          ...TripList_list
          ...TripHeader_trips
        }
      }
    `}
    variables={{}}
    render={res => {
      if (res.error) {
        return (
          <TripContainer>
            <StateContainer>
              <Alert type="critical">{String(res.error)}</Alert>
            </StateContainer>
          </TripContainer>
        );
      }

      if (!res.props) {
        return (
          <TripContainer>
            <StateContainer>
              <Text t={__("common.loading")} />
            </StateContainer>
          </TripContainer>
        );
      }

      const { customerBookings } = res.props;
      if (!customerBookings) {
        return (
          <TripContainer>
            <StateContainer>
              <Alert>
                <Text t={__("account.no_trips")} />
              </Alert>
            </StateContainer>
          </TripContainer>
        );
      }

      return (
        <TripContainer
          header={<TripHeader trips={customerBookings} />}
          positionMenuTablet={0}
          positionMenuDesktop={50}
        >
          <intlContext.Consumer>
            {intl => <TripList list={customerBookings} lang={intl.language.id} />}
          </intlContext.Consumer>
        </TripContainer>
      );
    }}
  />
);

export default TripDataList;
