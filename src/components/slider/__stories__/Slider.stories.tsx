import { useEffect, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import {
  type SliderProps,
  Slider as SliderComponent,
} from 'src/components/slider/Slider';
import { VStack } from 'src/components/stack/VStack';

const SliderMeta: Meta = {
  component: SliderComponent,
};

export default SliderMeta;

const Template: StoryFn<SliderProps> = ({
  max,
  min,
  step,
  value: _value,
  size,
}: SliderProps) => {
  const [value, setValue] = useState(_value);
  const [randomValue, setRandomValue] = useState(_value);
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomValue(Math.round(Math.random() * 100));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <VStack>
      <SliderComponent
        max={max}
        min={min}
        onChange={n => setValue(n)}
        size={size}
        step={step}
        value={value}
      />
      <div>
        Random value: {randomValue}
        <SliderComponent
          max={max}
          min={min}
          hideIndicator
          size={size}
          onChange={n => setRandomValue(n)}
          step={step}
          value={randomValue}
        />
      </div>
      <div>
        No indicator (Separate value): value: {value}
        <SliderComponent
          max={max}
          min={min}
          hideIndicator
          size={size}
          onChange={n => setValue(n)}
          step={step}
          value={value}
        />
      </div>
      <div>
        Different suffix
        <SliderComponent
          max={max}
          min={min}
          suffix="$"
          size={size}
          onChange={n => setValue(n)}
          step={step}
          value={value}
        />
      </div>
    </VStack>
  );
};

export const Slider = Template.bind({});
Slider.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
};
Slider.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
