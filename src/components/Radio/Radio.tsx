import React from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";

const CircleIcon = () => (
  <svg width="8" height="8" viewBox="0 0 10 10">
    <circle cx="5" cy="5" r="5" />
  </svg>
);

const StyledRadio = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(${AminoTheme.inputBackground});
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border: var(${AminoTheme.border});
  box-shadow: var(${AminoTheme.shadowSmall});
  margin-right: var(${AminoTheme.spaceHalf});
  transition: var(${AminoTheme.transition});

  &:active {
    border: var(${AminoTheme.borderBlue});
    box-shadow: var(${AminoTheme.glowBlue});
  }
`;

const SelectedRadio = styled(StyledRadio)`
  background: var(${AminoTheme.primary});
  border: 2px solid var(${AminoTheme.primary});

  svg {
    fill: white;
    box-shadow: var(${AminoTheme.shadowSmall});
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

type Props = {
  checked?: boolean;
  onChange?: any;
  label?: string;
};

export const Radio: React.FC<Props> = props => {
  const { label, checked, onChange } = props;

  return (
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
};

Radio.defaultProps = {
  checked: false
};
