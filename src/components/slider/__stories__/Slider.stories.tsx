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
  size,
  step,
  value: _value,
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
          hideIndicator
          max={max}
          min={min}
          onChange={n => setRandomValue(n)}
          size={size}
          step={step}
          value={randomValue}
        />
      </div>
      <div>
        No indicator (Separate value): value: {value}
        <SliderComponent
          hideIndicator
          max={max}
          min={min}
          onChange={n => setValue(n)}
          size={size}
          step={step}
          value={value}
        />
      </div>
      <div>
        Different suffix
        <SliderComponent
          max={max}
          min={min}
          onChange={n => setValue(n)}
          size={size}
          step={step}
          suffix="$"
          value={value}
        />
      </div>
    </VStack>
  );
};

export const Slider = Template.bind({});
Slider.args = {
  max: 100,
  min: 0,
  step: 1,
  value: 50,
};
Slider.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
