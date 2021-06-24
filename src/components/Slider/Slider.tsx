import React from 'react';
import styled from 'styled-components';
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';

const StyledSlider = styled(Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  height: 12px;
`;

const StyledTrack = styled(Track)`
  position: relative;
  flex-grow: 1;
  height: 12px;
  background-color: var(--amino-gray-200);
  border-radius: 20px;
  box-shadow: var(--amino-shadow-inset);
`;

const StyledRange = styled(Range)`
  position: absolute;
  background-color: var(--amino-primary);
  border-radius: 9999px;
  height: 100%;
`;

const StyledThumb = styled(Thumb)`
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 20px;
  box-shadow: var(--amino-shadow-small);
  border: var(--amino-border);

  &:focus,
  &:active {
    outline: none;
    border-color: var(--amino-primary);
    box-shadow: var(--amino-glow-blue);
    background: var(--amino-gray-100);
  }
`;

export type SliderProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (newValue: number) => void;
};

export const Slider = ({
  min,
  max,
  value,
  step,
  onChange,
}: SliderProps) => {
  return (
    <StyledSlider
      value={[value]}
      onValueChange={([val]) => onChange(val)}
      min={min}
      max={max}
      step={step}
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb />
    </StyledSlider>
  );
};
