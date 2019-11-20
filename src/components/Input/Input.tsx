import React from "react";
import styled from "styled-components";

import { TextStyle, Text } from "../Text";

const AminoInput = styled.input`
  height: 38px;
  box-sizing: border-box;
  position: relative;
  outline: none;
  border: 1px solid var(--amino-border-color);
  padding: 0 var(--amino-space-half);
  border-radius: var(--amino-radius);
  transition: var(--amino-transition);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  &:focus {
    outline: none;
    box-shadow: var(--amino-shadow-glow);
    border: 1px solid var(--amino-primary-light);
  }

  //&:active {
  //  box-shadow: var(--amino-shadow-glow);
  //}
`;

const AminoInputWrapper = styled.div`
  position: relative;
`;

type Props = {
  label?: string;
};

export const Input: React.FC<Props> = ({ label }) => {
  return (
    <AminoInputWrapper className="amino-input-wrapper">
      {label && <Text style={TextStyle.h5}>{label}</Text>}
      <AminoInput />
    </AminoInputWrapper>
  );
};
