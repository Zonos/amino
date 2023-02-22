import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';
import { theme } from 'src/styles/constants/theme';
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
  background-color: ${theme.gray200};
  border-radius: 20px;
  box-shadow: ${theme.v3ShadowInset};
  flex-grow: 1;
  height: 12px;
  position: relative;
`;

const StyledRange = styled(Range)`
  background-color: ${theme.primary};
  border-radius: 9999px;
  height: 100%;
  position: absolute;
`;

const StyledThumb = styled(Thumb)`
  background: white;
  border-radius: 20px;
  border: ${theme.border};
  box-shadow: ${theme.v3ShadowBase};
  display: block;
  height: 24px;
  width: 24px;

  cursor: pointer;

  &:focus,
  &:active {
    background: ${theme.gray100};
    border-color: ${theme.primary};
    box-shadow: ${theme.glowBlue};
    outline: none;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  height: calc(56px + ${theme.space24} + 10px);
`;

const Indicator = styled.div`
  align-items: center;
  background: ${theme.blue100};
  border-bottom-left-radius: ${theme.radius6};
  border-bottom-right-radius: ${theme.radius6};
  color: ${theme.blue800};
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
  border-bottom: 24px solid ${theme.blue100};
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  border-top-left-radius: ${theme.radius6};
  border-top-right-radius: ${theme.radius6};
  height: 0;
  width: 0;
  width: 48px;
`;

const IndicatorWrapper = styled.div`
  margin-left: -12px;
  margin-top: calc(${theme.space24} + 10px);
`;

export type SliderProps = {
  hideIndicator?: boolean;
  max?: number;
  min?: number;
  onChange: (newValue: number) => void;
  step?: number;
  /**
   * @default "%"
   */
  suffix?: string;
  value: number;
};

export const Slider = ({
  hideIndicator = false,
  max,
  min,
  onChange,
  step,
  suffix = '%',
  value,
}: SliderProps) => (
  <SliderWrapper>
    <StyledSlider
      max={max}
      min={min}
      onValueChange={([val]) => val !== undefined && onChange(val)}
      step={step}
      value={[value]}
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      (
      <StyledThumb>
        {!hideIndicator && (
          <IndicatorWrapper>
            <UpTriangle />
            <Indicator>
              <span>
                {value}
                {suffix}
              </span>
            </Indicator>
          </IndicatorWrapper>
        )}
      </StyledThumb>
      )
    </StyledSlider>
  </SliderWrapper>
);
