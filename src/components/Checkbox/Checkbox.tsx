import React from 'react';
import styled from 'styled-components';

import { Text } from 'components/Text';

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
  border-radius: var(--amino-radius-sm);
  background: var(--amino-input-background);
  border: var(--amino-border);
  transition: var(--amino-transition);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  box-shadow: var(--amino-shadow-small);
  margin-right: var(--amino-space-half);

  &:active {
    border: var(--amino-border-blue);
    box-shadow: var(--amino-glow-blue);
  }
`;

const SelectedCheckbox = styled(AminoCheckbox)`
  background: var(--amino-primary) !important;
  border: 2px solid var(--amino-primary);

  svg {
    fill: white;
    box-shadow: var(--amino-shadow-small);
  }
`;

const CheckboxContainer = styled.div<{
  multiline: boolean;
  disabled?: boolean;
}>`
  display: flex;
  flex-direction: row;
  user-select: none;
  align-items: ${p => (p.multiline ? 'flex-start' : 'center')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  opacity: ${props => (props.disabled ? '0.3' : '1')};

  a {
    color: var(--amino-primary);
    text-decoration: underline;
  }

  label {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: ${p => (p.multiline ? 'flex-start' : 'center')};
  }

  h5 {
    margin-bottom: 0;
  }
`;

export type CheckboxProps = {
  checked: boolean;
  onChange: (newValue: boolean) => void;
  label?: string;
  subtitle?: string;
  disabled?: boolean;
  labelComponent?: React.ReactNode;
};

export const Checkbox = ({
  checked,
  onChange,
  label,
  subtitle,
  disabled,
  labelComponent,
}: CheckboxProps) => (
  <CheckboxContainer
    className="amino-input-wrapper"
    disabled={disabled}
    multiline={!!subtitle}
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
        <Text style="inputlabel">{labelComponent || label}</Text>
        {subtitle && <Text style="subtitle">{subtitle}</Text>}
      </label>
    )}
  </CheckboxContainer>
);

Checkbox.defaultProps = {
  checked: false,
};
