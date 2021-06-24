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

const SliderWrapper = styled.div`
  position: relative;
`;

const Indicator = styled.div`
  position: absolute;
  background: var(--amino-blue-100);
  color: var(--amino-blue-700);
  width: 48px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: var(--amino-radius);
  border-bottom-right-radius: var(--amino-radius);
  font-weight: 500;
  user-select: none;

  span {
    margin-top: -8px;
  }
`;

const UpTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  border-bottom: 24px solid var(--amino-blue-100);
  width: 48px;
  border-top-left-radius: var(--amino-radius);
  border-top-right-radius: var(--amino-radius);
`;

const IndicatorWrapper = styled.div`
  margin-left: -12px;
  margin-top: calc(var(--amino-space) + 10px);
`;

export type SliderProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (newValue: number) => void;
};

export const Slider = ({ min, max, value, step, onChange }: SliderProps) => {
  return (
    <SliderWrapper>
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
