import React from "react";
import styled from "styled-components";

const CircleIcon = () => (
  <svg width="8" height="8" viewBox="0 0 10 10">
    <circle cx="5" cy="5" r="5" />
  </svg>
);

const StyledRadio = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--amino-input-background);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border: var(--amino-border);
  box-shadow: var(--amino-shadow-small);
  margin-right: var(--amino-space-half);
  transition: var(--amino-transition);

  &:active {
    border: var(--amino-border-blue);
    box-shadow: var(--amino-glow-blue);
  }
`;

const SelectedRadio = styled(StyledRadio)`
  background: var(--amino-primary);
  border: 2px solid var(--amino-primary);

  svg {
    fill: white;
    box-shadow: var(--amino-shadow-small);
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;

  label {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
`;

export type RadioProps = {
  checked?: boolean;
  onChange?: any;
  label?: string;
};

export const Radio = ({ label, checked, onChange }: RadioProps) => (
  <RadioContainer onClick={() => onChange(!checked)}>
    {!checked && <StyledRadio onClick={() => onChange(!checked)} />}
    {checked && (
      // TODO: animate in
      <SelectedRadio onClick={() => onChange(!checked)}>
        <CircleIcon />
      </SelectedRadio>
    )}
    {label && <label>{label}</label>}
  </RadioContainer>
);

Radio.defaultProps = {
  checked: false,
};
