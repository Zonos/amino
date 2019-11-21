import React, { ChangeEvent } from "react";
import styled from "styled-components";

import { Text, TextStyle } from "../Text";
import { DropdownIcon } from "../../icons/DropdownIcon";

const SelectContainer = styled.div`
  border-radius: var(--amino-radius);
  outline: none;
  box-sizing: border-box;
  transition: var(--amino-transition);
  display: block;
  height: 38px;
  width: 100%;
  padding: 0;
  position: relative;
  background: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  svg {
    position: absolute;
    top: 9px;
    right: var(--amino-space-half);
    stroke: var(--amino-gray-base);
    width: 20px;
    height: 20px;
    pointer-events: none;
  }
`;

const StyledSelect = styled.select`
  border: 1px solid var(--amino-border-color);
  width: 100%;
  height: 38px;
  box-shadow: none;
  background: transparent;
  -webkit-appearance: none;
  padding: 0 var(--amino-space-half);

  &:focus {
    outline: none;
    box-shadow: var(--amino-shadow-glow);
    border: 1px solid var(--amino-primary-light);
  }
`;

const AminoInputWrapper = styled.div<any>`
  position: relative;
  width: ${p => (p.width ? `${p.width}px` : "100%")};

  span {
    margin-top: var(--amino-space-quarter);
    display: block;
  }

  & div {
    flex-direction: row;
    align-items: center;
    display: flex;
  }
`;

type Props = {
  label?: string;
  helpText?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => any;
  value: string;
};

export const Select: React.FC<Props> = ({
  label,
  helpText,
  value,
  onChange,
  children
}) => {
  return (
    <AminoInputWrapper className="amino-input-wrapper">
      {label && <Text style={TextStyle.h5}>{label}</Text>}
      <SelectContainer>
        <StyledSelect onChange={onChange} defaultValue={value}>
          {children}
        </StyledSelect>
        <DropdownIcon />
      </SelectContainer>
      {helpText && <Text style={TextStyle.Subtitle}>{helpText}</Text>}
    </AminoInputWrapper>
  );
};
