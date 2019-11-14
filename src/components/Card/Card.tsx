import React from "react";
import styled from "styled-components";

const AminoCard = styled.div`
  background: white;
  padding: var(--amino-space);
  border-radius: var(--amino-radius-large);
  box-shadow: var(--amino-shadow-small);
`;

export const Card: React.FC = props => {
  return <AminoCard>{props.children}</AminoCard>;
};
