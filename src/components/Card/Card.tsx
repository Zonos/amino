import React from "react";
import styled from "styled-components";

import { Text, TextStyle } from "../Text";
import { Stack } from "../Stack";

const AminoCard = styled.div`
  background: white;
  padding: var(--amino-space);
  border-radius: var(--amino-radius-large);
  box-shadow: var(--amino-shadow-small);
`;

const CardHeader = styled.header`
  margin: var(--amino-space-negative);
  margin-bottom: var(--amino-space);
  padding: 0 var(--amino-space);
  border-bottom: 1px solid var(--amino-gray-light);
  height: 64px;
  display: flex;
  align-items: center;

  h4 {
    margin-bottom: 0;
    flex: 1;
  }

  // TODO: can this be achieved with the Stack?
  button {
    margin-left: var(--amino-space-half);
  }
`;

type Props = {
  label?: string;
  actions?: Array<React.ReactNode>;
};

export const Card: React.FC<Props> = ({ children, label, actions }) => {
  return (
    <AminoCard>
      {label && (
        <CardHeader>
          <Text style={TextStyle.h4}>{label}</Text>
          {actions && <Stack>{actions}</Stack>}
        </CardHeader>
      )}
      {children}
    </AminoCard>
  );
};
