import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  Slider as SliderComponent,
  SliderProps,
} from 'src/components/slider/Slider';
import { VStack } from 'src/components/stack/VStack';

const SliderMeta: Meta = {
  component: SliderComponent,
};

export default SliderMeta;

const Template: Story<SliderProps> = ({
  max,
  min,
  step,
  value: _value,
}: SliderProps) => {
  const [value, setValue] = useState(_value);

  return (
    <VStack>
      <SliderComponent
        max={max}
        min={min}
        onChange={n => setValue(n)}
        step={step}
        value={value}
      />
      <div>
        No indicator (Separate value): value: {value}
        <SliderComponent
          max={max}
          min={min}
          hideIndicator
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
