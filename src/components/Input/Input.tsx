import React, { ChangeEvent } from "react";
import styled from "styled-components";

import { TextStyle, Text } from "../Text";

const InputDecorator = styled.div`
  height: 38px;
  background: var(--amino-gray-lightest);
  padding: 0 var(--amino-space);
  border: 1px solid var(--amino-border-color);
`;

const InputPrefix = styled(InputDecorator)`
  border-top-left-radius: var(--amino-radius);
  border-bottom-left-radius: var(--amino-radius);
  border-right: 0;
`;

const InputSuffix = styled(InputDecorator)`
  border-top-right-radius: var(--amino-radius);
  border-bottom-right-radius: var(--amino-radius);
  border-left: 0;
`;

const AminoInput = styled.input`
  height: 38px;
  box-sizing: border-box;
  position: relative;
  outline: none;
  border: 1px solid var(--amino-border-color);
  padding: 0 var(--amino-space-half);
  transition: var(--amino-transition);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  width: 100%;  
  border-radius: var(--amino-radius);

  &:focus {
    outline: none;
    box-shadow: var(--amino-shadow-glow);
    border: 1px solid var(--amino-primary-light);
  }
  
  &.has-prefix {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  &.has-suffix {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
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

  /** A short string displayed at the beginning of the input */
  prefix?: string;

  /** A short string displayed at the end of the input */
  suffix?: string;
};

export const Input: React.FC<Props> = ({
  label,
  width,
  placeholder,
  helpText,
  value,
  onChange,
  prefix,
  suffix
}) => {
  return (
    <AminoInputWrapper width={width} className="amino-input-wrapper">
      {label && <Text style={TextStyle.h5}>{label}</Text>}
      <div>
        {prefix && <InputPrefix>{prefix}</InputPrefix>}
        <AminoInput
          className={`${prefix ? 'has-prefix' : ''} ${suffix ? 'has-suffix' : ''}`}
          placeholder={placeholder || ""}
          value={value}
          onChange={onChange}
        />
        {suffix && <InputSuffix>{suffix}</InputSuffix>}
      </div>
      {helpText && <Text style={TextStyle.Subtitle}>{helpText}</Text>}
    </AminoInputWrapper>
  );
};
