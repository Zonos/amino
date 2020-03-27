import React from "react";
import styled from "styled-components";

import { Input } from "../Input";

const Stepper = styled.div`
  display: flex;
  border-radius: var(--amimo-radius);

  input {
    border-radius: 0;
  }
`;

const Step = styled.button`
  border: 1px solid var(--amino-border-color);
  height: 38px;
  line-height: 16px;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--amino-transition);
  user-select: none;
  font-weight: 500;
  box-sizing: border-box;
  color: var(--amino-gray-base);
  outline: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background: var(--amino-gray-lightest);
  }

  &:active {
    outline: none;
    border: 2px solid var(--amino-primary);
  }

  &:first-of-type {
    border-top-left-radius: var(--amino-radius);
    border-bottom-left-radius: var(--amino-radius);
  }

  &:last-of-type {
    border-top-right-radius: var(--amino-radius);
    border-bottom-right-radius: var(--amino-radius);
  }
`;

type Props = {
  value: number;
  onChange: any;
  min: number;
  max: number;
  onIncrement: any;
  onDecrement: any;
};

export const StepperInput: React.FC<Props> = props => {
  const { value, onChange, min, max, onIncrement, onDecrement } = props;

  const inc = () => {
    if (value + 1 <= max) {
      onIncrement();
    }
  };

  const dec = () => {
    if (value - 1 >= min) {
      onDecrement();
    }
  };

  const prettyValue = `${value} / ${max}`;

  return (
    <Stepper>
      <Step onClick={dec}>-</Step>
      <Input readOnly value={prettyValue} onChange={onChange} />
      <Step onClick={inc}>+</Step>
    </Stepper>
  );
};
