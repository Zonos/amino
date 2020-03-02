import React from "react";
import styled from "styled-components";

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
  line-height: 18px;
  border-radius: 4px;
  background: white;
  border: 1px solid var(--amino-border-color);
  transition: var(--amino-transition);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  box-shadow: var(--amino-shadow-top);
  margin-right: var(--amino-space-half);

  &:active {
    outline: none;
    box-shadow: var(--amino-shadow-top-primary);
    border: 2px solid var(--amino-primary);
  }
`;

const SelectedCheckbox = styled(AminoCheckbox)`
  background: var(--amino-primary) !important;
  border: 2px solid var(--amino-primary);

  svg {
    fill: white;
    box-shadow: var(--amino-shadow-top);
  }
`;

const CheckboxContainer = styled.div<any>`
  display: flex;
  flex-direction: row;
  user-select: none;
  align-items: ${p => (p.multiline ? "flex-start" : "center")};
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
  opacity: ${props => (props.disabled ? "0.3" : "1")};

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

type Props = {
  checked: boolean;
  onChange: (newValue: boolean) => any;
  label?: string;
  subtitle?: string;
  disabled?: boolean;
};

export const Checkbox: React.FC<Props> = ({
  checked,
  onChange,
  label,
  subtitle,
  disabled
}) => (
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
        <Text style={TextStyle.h5}>{label}</Text>
        {subtitle && <Text style={TextStyle.Subtitle}>{subtitle}</Text>}
      </label>
    )}
  </CheckboxContainer>
);

Checkbox.defaultProps = {
  checked: false
};
