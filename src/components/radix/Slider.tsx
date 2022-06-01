import React from 'react';

import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';
import styled from 'styled-components';

const StyledSlider = styled(Root)`
  align-items: center;
  display: flex;
  height: 12px;
  position: relative;
  touch-action: none;
  user-select: none;
`;

const StyledTrack = styled(Track)`
  background-color: var(--amino-gray-200);
  border-radius: 20px;
  box-shadow: var(--amino-shadow-inset);
  flex-grow: 1;
  height: 12px;
  position: relative;
`;

const StyledRange = styled(Range)`
  background-color: var(--amino-primary);
  border-radius: 9999px;
  height: 100%;
  position: absolute;
`;

const StyledThumb = styled(Thumb)`
  background: white;
  border-radius: 20px;
  border: var(--amino-border);
  box-shadow: var(--amino-shadow-small);
  display: block;
  height: 24px;
  width: 24px;

  &:focus,
  &:active {
    background: var(--amino-gray-100);
    border-color: var(--amino-primary);
    box-shadow: var(--amino-glow-blue);
    outline: none;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  height: calc(56px + var(--amino-space) + 10px);
`;

const Indicator = styled.div`
  align-items: center;
  background: var(--amino-blue-100);
  border-bottom-left-radius: var(--amino-radius);
  border-bottom-right-radius: var(--amino-radius);
  color: var(--amino-blue-700);
  display: flex;
  font-weight: 500;
  height: 32px;
  justify-content: center;
  position: relative;
  user-select: none;
  width: 48px;

  span {
    margin-top: -8px;
  }
`;

const UpTriangle = styled.div`
  border-bottom: 24px solid var(--amino-blue-100);
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  border-top-left-radius: var(--amino-radius);
  border-top-right-radius: var(--amino-radius);
  height: 0;
  width: 0;
  width: 48px;
`;

const IndicatorWrapper = styled.div`
  margin-left: -12px;
  margin-top: calc(var(--amino-space) + 10px);
`;

export type SliderProps = {
  max?: number;
  min?: number;
  onChange: (newValue: number) => void;
  step?: number;
  value: number;
};

export const Slider = ({ min, max, value, step, onChange }: SliderProps) => {
  return (
    <SliderWrapper>
      <StyledSlider
        max={max}
        min={min}
        onValueChange={([val]) => onChange(val)}
        step={step}
        value={[value]}
      >
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledThumb>
          <IndicatorWrapper>
            <UpTriangle />
            <Indicator>
              <span>{value}%</span>
            </Indicator>
          </IndicatorWrapper>
        </StyledThumb>
      </StyledSlider>
    </SliderWrapper>
  );
};
