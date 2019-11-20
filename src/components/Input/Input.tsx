import React, { ChangeEvent } from "react";
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
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: var(--amino-shadow-glow);
    border: 1px solid var(--amino-primary-light);
  }
`;

const AminoInputWrapper = styled.div<any>`
  position: relative;
  width: ${p => (p.width ? `${p.width}px` : "100%")};
`;

type Props = {
  /** A label that will be displayed above the input */
  label?: string;

  /** A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;

  /** Placeholder text to be displayed in the input */
  placeholder?: string;

  /** Displayed in a tooltip next to the label */
  helpText?: string;

  /** Input value. Required since all inputs must be fully controlled */
  value: string;

  /** Input on changed. Required since all inputs must be fully controlled */
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
};

export const Input: React.FC<Props> = ({
  label,
  width,
  placeholder,
  helpText,
  value,
  onChange
}) => {
  return (
    <AminoInputWrapper width={width} className="amino-input-wrapper">
      {label && <Text style={TextStyle.h5}>{label}</Text>}
      <AminoInput
        placeholder={placeholder || ""}
        value={value}
        onChange={onChange}
      />
    </AminoInputWrapper>
  );
};
