import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';
import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Slider.module.scss';

type SliderSize = 8 | 12;

export type SliderProps = BaseProps & {
  hideIndicator?: boolean;
  max?: number;
  min?: number;
  /**
   * How thick you want the progress look
   * @default 12
   * */
  size?: SliderSize;
  step?: number;
  /**
   * @default "%"
   */
  suffix?: string;
  value: number;
  onChange: (newValue: number) => void;
};

export const Slider = ({
  className,
  hideIndicator = false,
  max,
  min,
  onChange,
  size = 12,
  step,
  style,
  suffix = '%',
  value,
}: SliderProps) => (
  <div
    className={clsx(className, styles.sliderWrapper)}
    style={{
      ...style,
      '--amino-slider-styled-thumb-height': `${size * 2}px`,
      '--amino-slider-styled-thumb-width': `${size * 2}px`,
      '--amino-slider-styled-track-height': `${size}px`,
      '--amino-slider-wrapper-height': !hideIndicator ? '90px' : '',
    }}
  >
    <Root
      className={styles.styledSlider}
      max={max}
      min={min}
      onValueChange={([val]) => val !== undefined && onChange(val)}
      step={step}
      value={[value]}
    >
      <Track className={styles.styledTrack}>
        <Range className={styles.styledRange} />
      </Track>

      <Thumb className={styles.styledThumb}>
        {!hideIndicator && (
          <div className={styles.indicatorWrapper}>
            <div className={styles.upTriangle} />
            <div className={styles.indicator}>
              <span>
                {value}
                {suffix}
              </span>
            </div>
          </div>
        )}
      </Thumb>
    </Root>
  </div>
);
