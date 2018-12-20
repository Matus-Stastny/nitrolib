// @flow strict
import * as React from "react";
import styled, { css } from "styled-components";
import AccountCircle from "@kiwicom/orbit-components/lib/icons/AccountCircle";

import mq from "../../../../styles/mq";
import Translate from "../../../Translate";
import ValueBind from "../../../ValueBind";
import { Consumer as ModalConsumer } from "../../../../services/modal/context";
import { Consumer as AuthConsumer } from "../../../../services/auth/context";
import Button from "../../primitives/Button";
import Trips from "../Trips";
import SideNav from "../SideNav";
import * as MODALS from "../../../../consts/modals";
import type { Modal } from "../../../../consts/modals";

type Props = {|
  chat: React.Node,
  subscription: React.Node,
  debug?: React.Node,
  portal: string,
  inverted: boolean,
  onSetModal: (modal: Modal) => void,
  onSaveLanguage: (lang: string) => void,
  onSelectTrip: (bid: string) => void,
|};

const GtBigMobile = styled.div`
  display: none;
  ${mq.gtBigMobile(css`
    display: flex;
  `)}
`;

const LtBigMobile = styled.div`
  display: none;
  ${mq.ltBigMobile(css`
    display: flex;
  `)}
`;

const Menu = ({
  chat,
  subscription,
  debug,
  portal,
  inverted,
  onSaveLanguage,
  onSelectTrip,
  onSetModal,
}: Props) => (
  <ModalConsumer>
    {({ onChange }) => (
      <>
        <AuthConsumer>
          {({ auth, environment }) =>
            auth === null ? (
              <ValueBind value={MODALS.MY_BOOKING} onChange={onChange}>
                {({ onClick }) => (
                  <>
                    <GtBigMobile>
                      <Button onClick={onClick} color={!inverted && "secondary"}>
                        <Translate t="account.my_bookings_action" />
                      </Button>
                    </GtBigMobile>
                    <LtBigMobile>
                      <Button color={!inverted && "secondary"} onClick={onClick}>
                        <AccountCircle />
                      </Button>
                    </LtBigMobile>
                  </>
                )}
              </ValueBind>
            ) : (
              <Trips auth={auth} env={environment} onSelect={onSelectTrip} />
            )
          }
        </AuthConsumer>

        <SideNav
          chat={chat}
          subscription={subscription}
          debug={debug}
          inverted={inverted}
          portal={portal}
          onOpenModal={onChange}
          onSaveLanguage={onSaveLanguage}
          onSetModal={onSetModal}
        />
      </>
    )}
  </ModalConsumer>
);

export default Menu;
