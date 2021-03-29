import React from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";
import { Text, TextStyle } from "../Text";

// TODO: multiline checkboxes could use some work

const CheckIcon = () => (
  <svg width={10} height={7} viewBox="0 0 10 7">
    <path
      fillRule="evenodd"
      d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
    />
  </svg>
);

const AminoCheckbox = styled.div`
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  line-height: 18px;
  border-radius: var(${AminoTheme.radiusSm});
  background: var(${AminoTheme.inputBackground});
  border: var(${AminoTheme.border});
  transition: var(${AminoTheme.transition});
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  box-shadow: var(${AminoTheme.shadowSmall});
  margin-right: var(${AminoTheme.spaceHalf});

  &:active {
    border: var(${AminoTheme.borderBlue});
    box-shadow: var(${AminoTheme.glowBlue});
  }
`;

const SelectedCheckbox = styled(AminoCheckbox)`
  background: var(${AminoTheme.primary}) !important;
  border: 2px solid var(${AminoTheme.primary});

  svg {
    fill: white;
    box-shadow: var(${AminoTheme.shadowSmall});
  }
`;

const CheckboxContainer = styled.div<any>`
  display: flex;
  flex-direction: row;
  user-select: none;
  align-items: ${p => (p.multiline ? "flex-start" : "center")};
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
  opacity: ${props => (props.disabled ? "0.3" : "1")};

  a {
    color: var(${AminoTheme.primary});
    text-decoration: underline;
  }

  label {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: ${p => (p.multiline ? "flex-start" : "center")};
  }

  h5 {
    margin-bottom: 0;
  }
`;

export type CheckboxProps = {
  checked: boolean;
  onChange: (newValue: boolean) => any;
  label?: string;
  subtitle?: string;
  disabled?: boolean;
  labelComponent?: any;
};

export const Checkbox = ({
  checked,
  onChange,
  label,
  subtitle,
  disabled,
  labelComponent
}: CheckboxProps) => (
  <CheckboxContainer
    className="amino-input-wrapper"
    disabled={disabled}
    multiline={subtitle}
    onClick={() => onChange(!checked)}
  >
    {!checked && <AminoCheckbox onClick={() => onChange(!checked)} />}
    {checked && (
      <SelectedCheckbox onClick={() => onChange(!checked)}>
        <CheckIcon />
      </SelectedCheckbox>
    )}
    {label && (
      <label>
        <Text style={TextStyle.h5}>
          {labelComponent ? React.cloneElement(labelComponent) : label}
        </Text>
        {subtitle && <Text style={TextStyle.Subtitle}>{subtitle}</Text>}
      </label>
    )}
  </CheckboxContainer>
);

Checkbox.defaultProps = {
  checked: false
};
