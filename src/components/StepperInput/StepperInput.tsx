import React from "react";
import styled from "styled-components";

import { Input } from "../Input";
import { StepperIcon } from "../../icons/StepperIcon";

const Stepper = styled.div`
  position: relative;
  border-radius: var(--amimo-radius);
`;

const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 1px;
  top: 1px;
  bottom: 1px;
  border-top-right-radius: var(--amino-radius);
  border-bottom-right-radius: var(--amino-radius);
  background: var(--amino-gray-lightest);
  border-left: 1px solid var(--amino-border-color);

  svg {
    fill: #718096;
    width: 10px;
    height: 10px;
  }

  div {
    cursor: pointer;
    padding: 0 var(--amino-space-quarter);
    align-items: center;
    flex: 1;
    display: flex;
    justify-content: center;
    background: white;
    transition: var(--amino-transition);
    user-select: none;
  }

  div:hover {
    background: var(--amino-gray-lightest);
  }

  div:first-of-type {
    border-top-right-radius: var(--amino-radius);
    border-bottom: 1px solid var(--amino-border-color);
  }

  div:last-of-type {
    border-bottom-right-radius: var(--amino-radius);
  }

  .flip svg {
    transform: rotate(180deg);
  }
`;

type Props = {
  value: number;
  onChange: any;
  min: number;
  max: number;
};

export const StepperInput: React.FC<Props> = props => {
  const { value, onChange, min, max } = props;

  const inc = () => {
    if (value + 1 <= max) {
      onChange(value + 1);
    }
  };

  const dec = () => {
    if (value - 1 >= min) {
      onChange(value - 1);
    }
  };

  const prettyValue = () => `${value} / ${max}`;

  return (
    <Stepper>
      <Input readOnly value={prettyValue()} onChange={onChange} />
      <Arrows>
        <div className="flip" onClick={inc}>
          <StepperIcon />
        </div>
        <div onClick={dec}>
          <StepperIcon />
        </div>
      </Arrows>
    </Stepper>
  );
};
