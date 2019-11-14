import React from "react";
import styled from "styled-components";

const AminoButton = styled.button`
  background: var(--amino-primary);
  padding: var(--amino-space-half) var(--amino-space);
  color: white;
  border-radius: var(--amino-radius);
`;

export const Button: React.FC = props => {
  return <AminoButton>{props.children}</AminoButton>;
};
