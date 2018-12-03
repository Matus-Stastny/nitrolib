// @flow strict
import * as React from "react";
import styled from "styled-components";
import Button from "@kiwicom/orbit-components/lib/Button";

import { padding } from "../../styles";
import { themeDefault } from "../../records/Theme";
import type { ThemeProps } from "../../records/Theme";
import Translate from "../Translate";

const Container = styled.div`
  padding: ${padding.page}px;
  background: ${({ theme }: ThemeProps) => theme.orbit.paletteWhite};
`;

Container.defaultProps = {
  theme: themeDefault,
};

const Message = styled.div`
  margin-bottom: 15px;
`;

type Props = {|
  children: React.Node,
  button?: React.Node,
  onClose: () => void,
|};

const AcceptAlert = ({ children, button, onClose }: Props) => (
  <Container>
    <Message>{children}</Message>
    <Button block onClick={onClose}>
      {button}
    </Button>
  </Container>
);

AcceptAlert.defaultProps = {
  button: <Translate t="common.ok" />,
};

export default AcceptAlert;
