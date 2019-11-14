import React from "react";
import styled from "styled-components";

import { Text, TextStyle } from "../Text";

const AminoCard = styled.div`
  background: white;
  padding: var(--amino-space);
  border-radius: var(--amino-radius-large);
  box-shadow: var(--amino-shadow-small);
`;

const CardHeader = styled.header``;

type Props = {
  label?: string;
};

export const Card: React.FC<Props> = ({ children, label }) => {
  const headerContent = label && <Text style={TextStyle.h4}>{label}</Text>;

  return (
    <AminoCard>
      {label && <CardHeader>{headerContent}</CardHeader>}
      {children}
    </AminoCard>
  );
};
